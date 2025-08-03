import { motion } from "framer-motion"
import { ExternalLink, Users, Globe, Rocket, Github, Instagram, Mail } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { ImageSlideshow } from "@/components/image-slideshow"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <img
              src="/lovable-uploads/e12ae66d-dea1-4deb-a63a-81f9fd98707b.png"
              alt="WikiClub Tech United University"
              className="w-full max-w-4xl mx-auto h-auto"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <ImageSlideshow />
          </motion.div>
        </div>
      </section>

      {/* About Wiki Club Tech Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              About Wiki Club Tech — United University
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                Wiki Club Tech at United University is a vibrant student-led community dedicated to promoting 
                open knowledge, technological innovation, and collaborative learning. We bridge the gap between 
                technology and knowledge sharing, empowering students to contribute to the global open-source ecosystem.
              </p>
              <p className="text-lg text-foreground/80 leading-relaxed">
                Our mission encompasses technical skill development, wiki contribution training, and fostering 
                a culture of open collaboration. We organize workshops, hackathons, and contribution drives 
                that help students make meaningful impacts on platforms like Wikipedia and other Wikimedia projects.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Wikimedia Foundation Section */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass hover-lift max-w-4xl mx-auto">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
                    <Globe className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold font-poppins mb-4">
                  About Wikimedia Foundation
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">
                  The Wikimedia Foundation is a nonprofit organization that operates Wikipedia and other 
                  free knowledge projects. With a vision of a world where everyone can freely share 
                  in the sum of all knowledge, Wikimedia has created the largest repository of human 
                  knowledge in history.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Through projects like Wikipedia, Wikidata, Wikimedia Commons, and more, the Foundation 
                  supports over 1.7 billion unique visitors monthly, making knowledge accessible to 
                  everyone, everywhere, in hundreds of languages.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Road to Wiki Program Section */}
      <section id="road-to-wiki" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass hover-lift gradient-bg text-white">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Rocket className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-4xl font-bold font-poppins mb-4">
                  🚀 Road to Wiki Program
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  A transformative cohort-based learning experience
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  Our flagship Road to Wiki Program is a comprehensive cohort-based initiative designed 
                  to guide students through the world of open source contribution and wiki editing. 
                  This program combines technical skill development with collaborative learning.
                </p>
                <p className="text-lg text-white/90 mb-8 leading-relaxed">
                  Participants learn essential skills in version control, documentation, content creation, 
                  and community collaboration while making real contributions to Wikimedia projects. 
                  The program is perfect for students looking to build their portfolio and make a global impact.
                </p>
                
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-8"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-3 hover-glow"
                    onClick={() => window.open("https://docs.google.com/forms/u/2/d/e/1FAIpQLSdhllqy5J27BOytcHiELSH9amZVHED_qxgyYb7mSyCem1mpRg/viewform?usp=send_form", "_blank")}
                  >
                    Join Now <ExternalLink className="ml-2 h-5 w-5" />
                  </Button>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="text-center"
                >
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Open source collaboration"
                    className="rounded-lg mx-auto max-w-md w-full opacity-90"
                  />
                  <p className="text-white/80 italic mt-4">
                    "The best way to predict the future is to invent it." - Alan Kay
                  </p>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 bg-foreground text-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-bold gradient-text mb-4 font-poppins">
                wikiclubtechuu
              </h3>
              <p className="text-lg text-background/80 mb-6">
                🛠️ This website is currently under maintenance. More features and content will be added soon.
              </p>
            </div>

            <div className="flex justify-center space-x-6 mb-8">
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-full bg-background/10 hover:bg-background/20 smooth-transition"
              >
                <Instagram className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: -5 }}
                className="p-3 rounded-full bg-background/10 hover:bg-background/20 smooth-transition"
              >
                <Github className="h-6 w-6" />
              </motion.a>
              <motion.a
                href="#"
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-3 rounded-full bg-background/10 hover:bg-background/20 smooth-transition"
              >
                <Mail className="h-6 w-6" />
              </motion.a>
            </div>

            <p className="text-background/60">
              © 2024 Wiki Club Tech, United University. All rights reserved.
            </p>
          </motion.div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
