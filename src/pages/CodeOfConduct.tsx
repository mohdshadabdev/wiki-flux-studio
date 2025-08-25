import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Shield, Heart, Lightbulb, MessageSquare, AlertTriangle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

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
      title: "Respect & Inclusivity",
      icon: <Heart className="w-6 h-6" />,
      content: "Treat everyone with respect regardless of background, identity, or experience level. No discrimination, harassment, or exclusionary behavior will be tolerated."
    },
    {
      title: "Professionalism",
      icon: <Shield className="w-6 h-6" />,
      content: "Be punctual, reliable, and responsible in all volunteer activities. Maintain professional standards in communication and conduct."
    },
    {
      title: "Collaboration & Teamwork",
      icon: <Users className="w-6 h-6" />,
      content: "Support and share knowledge with fellow volunteers. Foster a collaborative environment that encourages learning and growth."
    },
    {
      title: "Integrity & Responsibility",
      icon: <CheckCircle className="w-6 h-6" />,
      content: "Use WikiClub resources ethically and responsibly. Stay accountable for your actions and commitments to the organization."
    },
    {
      title: "Learning & Contribution",
      icon: <Lightbulb className="w-6 h-6" />,
      content: "Embrace the spirit of open knowledge and Wikimedia values. Actively contribute to the mission of free and accessible information."
    },
    {
      title: "Digital Etiquette",
      icon: <MessageSquare className="w-6 h-6" />,
      content: "Communicate respectfully in all digital platforms. Avoid spam, inappropriate content, and maintain constructive dialogue."
    },
    {
      title: "Consequences of Violation",
      icon: <AlertTriangle className="w-6 h-6" />,
      content: "Violations of this code may result in warnings, temporary suspension, or removal from WikiClub Tech UU, depending on severity."
    }
  ];

  if (submitted) {
    return (
      <div className="min-h-screen bg-background pt-20">
        <div className="container mx-auto px-4 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg p-8">
              <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
              <h1 className="text-2xl font-bold text-green-800 dark:text-green-400 mb-2">
                Successfully Submitted!
              </h1>
              <p className="text-green-700 dark:text-green-300">
                You have successfully submitted the Code of Conduct. Thank you for being part of WikiClub Tech UU.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pt-20">
      <div className="container mx-auto px-4 py-8">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-4">
              WikiClub Tech UU – Volunteer Code of Conduct
            </h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              This Code of Conduct outlines the values and responsibilities of all volunteers at WikiClub Tech UU. 
              By agreeing below, you confirm your commitment to professionalism, inclusivity, and the Wikimedia spirit.
            </p>
          </div>
        </motion.div>

        {/* Main Sections */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="grid gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="border-l-4 border-l-primary">
                  <CardHeader className="pb-3">
                    <CardTitle className="flex items-center gap-3 text-xl">
                      <div className="text-primary">
                        {section.icon}
                      </div>
                      {section.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">
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
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Agreement Form</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="fullName">Full Name *</Label>
                  <Input
                    id="fullName"
                    type="text"
                    required
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email">Email Address *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="contactNumber">Contact Number *</Label>
                  <Input
                    id="contactNumber"
                    type="tel"
                    required
                    value={formData.contactNumber}
                    onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
                    placeholder="Enter your contact number"
                  />
                </div>

                <div className="flex items-center space-x-2">
                  <Checkbox
                    id="agreement"
                    checked={formData.agreed}
                    onCheckedChange={(checked) => setFormData({...formData, agreed: checked as boolean})}
                  />
                  <Label htmlFor="agreement" className="text-sm leading-relaxed">
                    I have read and agree to the WikiClub Tech UU Code of Conduct *
                  </Label>
                </div>

                <Button
                  type="submit"
                  className="w-full"
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
  );
};

export default CodeOfConduct;