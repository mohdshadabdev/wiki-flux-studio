import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Download, CheckCircle, XCircle, Mail, User, Shield, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { Badge } from "@/components/ui/badge";
import { Navigation } from "@/components/navigation";
import { fetchCertificatesFromGoogleSheet, findCertificate, Certificate } from "@/utils/certificates";

export default function Validator() {
  const [certificateId, setCertificateId] = useState("");
  const [emailOrName, setEmailOrName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState<Certificate | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [hasSearched, setHasSearched] = useState(false);

  const handleValidate = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!certificateId.trim() || !emailOrName.trim()) {
      setError("Please fill in all required fields");
      return;
    }

    setIsLoading(true);
    setError(null);
    setResult(null);
    setHasSearched(false);

    try {
      const certificates = await fetchCertificatesFromGoogleSheet();
      const foundCertificate = findCertificate(certificates, certificateId, emailOrName);
      
      setResult(foundCertificate);
      setHasSearched(true);
    } catch (err) {
      setError("Failed to validate certificate. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDownload = (downloadUrl: string) => {
    if (downloadUrl) {
      window.open(downloadUrl, '_blank');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted/30 to-background">
      <Navigation />
      
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Shield className="h-12 w-12 text-primary mr-3" />
              <h1 className="text-4xl md:text-5xl font-bold gradient-text">
                Certificate Validator
              </h1>
            </div>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Verify your WikiClub Tech UU event certificate instantly. Enter your Certificate ID and the email or name used for registration.
            </p>
          </motion.div>

          {/* Search Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
          >
            <Card className="glass border-border/50 shadow-xl">
              <CardHeader className="text-center">
                <CardTitle className="text-2xl text-foreground">Validate Certificate</CardTitle>
                <CardDescription className="text-muted-foreground">
                  Enter your details below to verify your certificate
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleValidate} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="certificateId" className="text-sm font-medium text-foreground">
                      Certificate ID *
                    </Label>
                    <Input
                      id="certificateId"
                      type="text"
                      placeholder="Enter your certificate ID"
                      value={certificateId}
                      onChange={(e) => setCertificateId(e.target.value)}
                      required
                      className="bg-background border-border focus:ring-primary focus:border-primary"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="emailOrName" className="text-sm font-medium text-foreground">
                      Email or Name *
                    </Label>
                    <Input
                      id="emailOrName"
                      type="text"
                      placeholder="Enter email or name used for registration"
                      value={emailOrName}
                      onChange={(e) => setEmailOrName(e.target.value)}
                      required
                      className="bg-background border-border focus:ring-primary focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-3"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                        Validating...
                      </>
                    ) : (
                      <>
                        <Search className="h-4 w-4 mr-2" />
                        Validate Certificate
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Loading State */}
          {isLoading && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <Card className="glass border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Success Result */}
          {hasSearched && result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <Card className="glass border-green-200 bg-green-50/50 dark:border-green-800 dark:bg-green-950/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="h-8 w-8 text-green-600" />
                    <div>
                      <CardTitle className="text-green-800 dark:text-green-200">
                        Certificate Verified Successfully!
                      </CardTitle>
                      <CardDescription className="text-green-700 dark:text-green-300">
                        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200">
                          <Shield className="h-3 w-3 mr-1" />
                          Verified by WikiClub Tech UU
                        </Badge>
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-2" />
                        Certificate ID
                      </div>
                      <p className="font-mono text-sm bg-background/50 px-3 py-2 rounded border">
                        {result.id}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <User className="h-4 w-4 mr-2" />
                        Name
                      </div>
                      <p className="font-medium bg-background/50 px-3 py-2 rounded border">
                        {result.name}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </div>
                      <p className="font-medium bg-background/50 px-3 py-2 rounded border">
                        {result.email}
                      </p>
                    </div>
                    
                    <div className="space-y-2">
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="h-4 w-4 mr-2" />
                        Verified At
                      </div>
                      <p className="text-sm bg-background/50 px-3 py-2 rounded border">
                        {new Date().toLocaleString()}
                      </p>
                    </div>
                  </div>
                  
                  {result.downloadUrl && (
                    <Button
                      onClick={() => handleDownload(result.downloadUrl)}
                      className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 mt-4"
                    >
                      <Download className="h-4 w-4 mr-2" />
                      Download Certificate
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Error/Not Found Result */}
          {hasSearched && !result && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <Card className="glass border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <XCircle className="h-8 w-8 text-red-600" />
                    <div>
                      <CardTitle className="text-red-800 dark:text-red-200">
                        Certificate Not Found
                      </CardTitle>
                      <CardDescription className="text-red-700 dark:text-red-300">
                        The certificate details you entered could not be verified
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="bg-background/50 p-4 rounded-lg border">
                    <h4 className="font-medium mb-2 text-foreground">Please check:</h4>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Certificate ID is entered correctly (case-sensitive)</li>
                      <li>• Email or name matches exactly what was used during registration</li>
                      <li>• Certificate has been officially issued by WikiClub Tech UU</li>
                    </ul>
                  </div>
                  
                  <div className="bg-background/50 p-4 rounded-lg border">
                    <h4 className="font-medium mb-2 text-foreground">Still having issues?</h4>
                    <p className="text-sm text-muted-foreground mb-3">
                      Contact our support team for assistance
                    </p>
                    <Button variant="outline" className="w-full" asChild>
                      <a href="mailto:contact@wikiclubtechuu.online" className="flex items-center">
                        <Mail className="h-4 w-4 mr-2" />
                        Contact Support
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Error Message */}
          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mt-8"
            >
              <Card className="glass border-red-200 bg-red-50/50 dark:border-red-800 dark:bg-red-950/20">
                <CardContent className="p-6">
                  <div className="flex items-center space-x-3">
                    <XCircle className="h-6 w-6 text-red-600" />
                    <p className="text-red-800 dark:text-red-200">{error}</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>
      </main>
    </div>
  );
}