import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Shield, Heart, Lightbulb, MessageSquare, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Navigation } from "@/components/navigation";

const CodeOfConduct = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    contactNumber: "",
    agreed: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.agreed) {
      toast({
        title: "Agreement Required",
        description: "Please agree to the Code of Conduct before submitting.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "63bde66b-6e28-4463-85e5-c7275a70e091",
          subject: "WikiClub Tech UU - Code of Conduct Agreement",
          from_name: formData.fullName,
          email: formData.email,
          phone: formData.contactNumber,
          message: `${formData.fullName} has agreed to the WikiClub Tech UU Code of Conduct.`
        }),
      });

      if (response.ok) {
        setSubmitted(true);
        toast({
          title: "Success!",
          description: "Your Code of Conduct agreement has been submitted successfully.",
        });
      } else {
        throw new Error("Failed to submit");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to submit the form. Please try again.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const sections = [
    {
      title: "Core Values",
      icon: <Heart className="w-6 h-6" />,
      content: "We uphold the principles of respect, inclusivity, and integrity. Every member is valued regardless of their background, identity, or experience level. We foster an environment where diversity is celebrated and everyone feels welcome to contribute their unique perspectives and skills."
    },
    {
      title: "Decision-making",
      icon: <Lightbulb className="w-6 h-6" />,
      content: "All decisions within WikiClub Tech UU are made transparently and collaboratively. We encourage open discussion, welcome feedback from all members, and ensure that important decisions are communicated clearly to the community with proper reasoning and context."
    },
    {
      title: "Unacceptable Behavior",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: "We have zero tolerance for harassment, discrimination, hate speech, or any form of abusive behavior. This includes but is not limited to: offensive comments, intimidation, stalking, inappropriate physical contact, unwelcome sexual attention, or disruption of events and discussions."
    },
    {
      title: "Reporting",
      icon: <MessageSquare className="w-6 h-6" />,
      content: "If you experience or witness any violations of this code of conduct, please report it immediately to our leadership team at contact@wikiclubtechuu.online. All reports will be handled confidentially and investigated promptly with appropriate action taken."
    },
    {
      title: "Conflicts of Interest",
      icon: <Shield className="w-6 h-6" />,
      content: "Members must disclose any potential conflicts of interest that may affect their participation in WikiClub activities. We maintain transparency in all partnerships, sponsorships, and collaborations to ensure the integrity of our mission and values."
    },
    {
      title: "Violation Consequences",
      icon: <CheckCircle className="w-6 h-6" />,
      content: "Violations of this code may result in warnings, temporary suspension of privileges, or permanent removal from WikiClub Tech UU, depending on the severity and frequency of violations. All enforcement actions will be fair, proportionate, and documented appropriately."
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navigation />
        <div className="pt-20">
          <div className="container mx-auto px-4 py-16">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="max-w-2xl mx-auto text-center"
            >
              <Card className="glass hover-lift">
                <CardContent className="p-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h1 className="text-2xl font-bold text-green-800 mb-2 font-poppins">
                    Successfully Submitted!
                  </h1>
                  <p className="text-green-700">
                    You have successfully submitted the Code of Conduct. Thank you for being part of WikiClub Tech UU.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <div className="pt-20 pb-16 bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <div className="text-center mb-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", duration: 0.8 }}
                className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center mx-auto mb-6"
              >
                <Shield className="h-10 w-10 text-white" />
              </motion.div>
              
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 font-poppins">
                Code of Conduct
              </h1>
              <p className="text-lg text-white/90 max-w-3xl mx-auto leading-relaxed">
                This Code of Conduct outlines the values and responsibilities of all volunteers at WikiClub Tech UU. 
                By agreeing below, you confirm your commitment to professionalism, inclusivity, and the Wikimedia spirit.
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="py-16 bg-background">
        <div className="container mx-auto px-4 py-8">

          {/* Community Message Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-4xl mx-auto mb-12"
          >
            <Card className="glass hover-lift bg-gradient-to-br from-blue-50/80 to-white/90 border-2 border-blue-200/50">
              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl text-foreground font-poppins">
                  Message to Our Community
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-foreground/80 leading-relaxed text-center font-medium">
                  Dear WikiClub Tech UU Community,
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We want you to know that your safety, privacy, and connection with us are our top priorities. 
                  We deeply appreciate your trust and support as we strive to provide a protected and inclusive 
                  environment for all. Your privacy is highly valued, and we have implemented strong measures to 
                  ensure the confidentiality of your personal information.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  We are committed to fostering diversity and inclusivity within our community. Our programs 
                  celebrate individuals from all backgrounds, ensuring that everyone feels valued and respected. 
                  We are dedicated to delivering the best possible experience to you. Your feedback is crucial 
                  in helping us improve and meet your expectations. Please feel free to share your thoughts and 
                  suggestions with us on <a href="mailto:contact@wikiclubtechuu.online" className="text-blue-600 hover:underline font-medium">contact@wikiclubtechuu.online</a>.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Your safety is paramount. As we navigate these challenging times, whether online or in-person, 
                  we are committed to providing a safe and secure environment for all community members. We are 
                  grateful for your belief in us and for being a part of WikiClub Tech UU. Together, let's 
                  continue to learn, grow, and thrive.
                </p>
                <div className="text-center pt-4">
                  <p className="text-foreground/80">
                    Join us on <a href="https://linktr.ee/wikiclubtechuu" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline font-medium">https://linktr.ee/wikiclubtechuu</a>
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Main Sections */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="grid gap-6">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                >
                  <Card className="glass hover-lift border-l-4 border-l-blue-600 bg-card/70">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-3 text-xl">
                        <div className="text-blue-600 bg-blue-100 p-2 rounded-full">
                          {section.icon}
                        </div>
                        <span className="text-lg font-semibold text-foreground font-poppins">{index + 1}. {section.title}</span>
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-foreground/80 leading-relaxed">
                        {section.content}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="glass hover-lift bg-card/70">
              <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-lg">
                <CardTitle className="text-2xl text-center font-poppins">Agreement Form</CardTitle>
                <p className="text-center text-blue-100">Please confirm your agreement to abide by our Code of Conduct</p>
              </CardHeader>
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-foreground font-medium">Full Name *</Label>
                    <Input
                      id="fullName"
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                      placeholder="Enter your full name"
                      className="glass border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground font-medium">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="Enter your email address"
                      className="glass border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contactNumber" className="text-foreground font-medium">Contact Number *</Label>
                    <Input
                      id="contactNumber"
                      type="tel"
                      required
                      value={formData.contactNumber}
                      onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                      placeholder="Enter your contact number"
                      className="glass border-primary/30 focus:border-primary"
                    />
                  </div>

                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreement"
                      checked={formData.agreed}
                      onCheckedChange={(checked) => setFormData({...formData, agreed: checked as boolean})}
                    />
                    <Label htmlFor="agreement" className="text-foreground cursor-pointer">
                      I have read and agree to the WikiClub Tech UU Code of Conduct *
                    </Label>
                  </div>

                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 text-lg disabled:opacity-50 hover-lift"
                    disabled={isSubmitting || !formData.agreed}
                  >
                    {isSubmitting ? "Submitting..." : "Submit Agreement"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CodeOfConduct;