export interface Certificate {
  id: string;
  name: string;
  email: string;
  downloadUrl: string;
}

export async function fetchCertificatesFromGoogleSheet(): Promise<Certificate[]> {
  const csvUrl = 'https://docs.google.com/spreadsheets/d/1KfxWeP21U06emmQjDGQVg9cUcJbxMT29vOz6ZDTfH4I/export?format=csv';
  
  try {
    const res = await fetch(csvUrl);
    if (!res.ok) throw new Error('Failed to fetch CSV');
    const csvText = await res.text();

    const lines = csvText.trim().split('\n');
    if (lines.length === 0) return [];
    
    const headers = lines[0].split(',').map(h => h.trim().replace(/^"|"$/g, ''));

    const idx = (name: string) => headers.findIndex(h => h.toLowerCase() === name.toLowerCase());
    const idIdx = idx('ID');
    const nameIdx = idx('Name');
    const emailIdx = idx('Email');
    const downloadIdx = idx('Downlod Link'); // match exact header name in sheet

    const certs: Certificate[] = [];
    for (let i = 1; i < lines.length; i++) {
      const values = lines[i].split(',').map(v => v.trim().replace(/^"|"$/g, ''));
      if (!values[idIdx]) continue;
      certs.push({
        id: values[idIdx] || '',
        name: values[nameIdx] || '',
        email: values[emailIdx] || '',
        downloadUrl: values[downloadIdx] || '',
      });
    }
    return certs;
  } catch (error) {
    console.error('Error fetching certificates:', error);
    return [];
  }
}

export function normalize(s: string): string {
  return (s || '').toLowerCase().trim();
}

export function findCertificate(
  certificates: Certificate[],
  certificateId: string,
  emailOrName: string
): Certificate | null {
  const searchId = normalize(certificateId);
  const searchInfo = normalize(emailOrName);
  
  return certificates.find(cert => {
    const certId = normalize(cert.id);
    const certEmail = normalize(cert.email);
    const certName = normalize(cert.name);
    
    return certId === searchId && (certEmail === searchInfo || certName === searchInfo);
  }) || null;
}