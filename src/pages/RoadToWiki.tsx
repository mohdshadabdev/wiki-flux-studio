import { motion } from "framer-motion"
import { ExternalLink, Award, Users, BookOpen, Calendar, MapPin, Trophy, Star, CheckCircle, Clock, Target } from "lucide-react"
import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const RoadToWiki = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-8"
            >
              <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-6">
                <Trophy className="h-12 w-12 text-white" />
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
                🚀 Road to Wiki
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto">
                Transform Your Technical Journey Through Open Source Contribution
              </p>
              <Badge variant="secondary" className="text-lg px-6 py-2 mb-8">
                Cohort-Based Learning Program
              </Badge>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                size="lg"
                variant="secondary"
                className="text-lg px-8 py-4 hover-glow"
                onClick={() => window.open("https://docs.google.com/forms/u/2/d/e/1FAIpQLSdhllqy5J27BOytcHiELSH9amZVHED_qxgyYb7mSyCem1mpRg/viewform?usp=send_form", "_blank")}
              >
                Apply Now <ExternalLink className="ml-2 h-6 w-6" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              What is Road to Wiki?
            </h2>
            <p className="text-lg text-foreground/80 max-w-4xl mx-auto leading-relaxed">
              Road to Wiki is our flagship cohort-based learning program designed to guide students 
              through the exciting world of open source contribution and wiki editing. This comprehensive 
              8-week intensive program combines technical skill development with collaborative learning 
              and real-world impact.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "Learn by Doing",
                description: "Hands-on workshops covering Git, documentation, content creation, and technical writing"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Collaborative Environment",
                description: "Work alongside passionate peers in a supportive cohort-based learning structure"
              },
              {
                icon: <Award className="h-8 w-8" />,
                title: "Real Impact",
                description: "Make meaningful contributions to Wikipedia and other Wikimedia projects"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                <Card className="glass hover-lift h-full">
                  <CardHeader className="text-center">
                    <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4 text-white">
                      {item.icon}
                    </div>
                    <CardTitle className="text-xl font-bold">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-foreground/80 text-center">{item.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
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
              Program Perks & Benefits
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Star className="h-6 w-6" />, text: "Certificate of Completion" },
              { icon: <Trophy className="h-6 w-6" />, text: "Open Source Portfolio Development" },
              { icon: <Users className="h-6 w-6" />, text: "Mentorship from Industry Experts" },
              { icon: <BookOpen className="h-6 w-6" />, text: "Technical Writing Skills" },
              { icon: <Award className="h-6 w-6" />, text: "Community Recognition" },
              { icon: <Target className="h-6 w-6" />, text: "Career Development Support" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3 bg-background/80 p-4 rounded-lg hover-lift"
              >
                <div className="w-10 h-10 rounded-full gradient-bg flex items-center justify-center text-white">
                  {benefit.icon}
                </div>
                <span className="font-medium">{benefit.text}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Selection Process */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Selection Process
            </h2>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "01",
                  title: "Application Submission",
                  description: "Complete the online application form with your motivation and background",
                  duration: "Open until slots fill"
                },
                {
                  step: "02", 
                  title: "Initial Screening",
                  description: "Review of applications based on enthusiasm, commitment, and learning goals",
                  duration: "1-2 weeks"
                },
                {
                  step: "03",
                  title: "Interview Round",
                  description: "Brief interview to understand your motivation and assess program fit",
                  duration: "30 minutes"
                },
                {
                  step: "04",
                  title: "Final Selection",
                  description: "Cohort finalization and program onboarding",
                  duration: "1 week"
                }
              ].map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="glass hover-lift">
                    <CardContent className="p-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center text-white font-bold text-lg">
                          {process.step}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                          <p className="text-foreground/80 mb-2">{process.description}</p>
                          <div className="flex items-center space-x-2 text-sm text-foreground/60">
                            <Clock className="h-4 w-4" />
                            <span>{process.duration}</span>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Previous Cohort Success */}
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
              Previous Cohort Highlights
            </h2>
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto">
              Celebrating the achievements of our Road to Wiki Batch 2024 participants
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="glass hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold gradient-text text-center">250+</CardTitle>
                  <CardDescription className="text-center">Wikipedia Articles Created</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="glass hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold gradient-text text-center">45</CardTitle>
                  <CardDescription className="text-center">Successful Graduates</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="glass hover-lift">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold gradient-text text-center">100K+</CardTitle>
                  <CardDescription className="text-center">Article Views Generated</CardDescription>
                </CardHeader>
              </Card>
            </motion.div>
          </div>

          {/* Graduation Celebration */}
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
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold font-poppins mb-4">
                  🎓 Graduation Day Celebration
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Meta Office, Gurgaon - Batch 2024
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-white/90 mb-6 leading-relaxed">
                  Our incredible batch of 2024 celebrated their achievements at the prestigious Meta office 
                  in Gurgaon. The graduation ceremony was a testament to their dedication and the impact 
                  they've made in the open knowledge community.
                </p>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <img
                    src="https://images.unsplash.com/photo-1531058020387-3be344556be6?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Wiki celebration"
                    className="rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Team collaboration"
                    className="rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
                    alt="Graduation ceremony"
                    className="rounded-lg opacity-90 hover:opacity-100 transition-opacity"
                  />
                </div>

                <p className="text-white/80 italic">
                  "Knowledge is power, and sharing knowledge is empowerment" - Road to Wiki Motto
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <Card className="glass hover-lift max-w-3xl mx-auto gradient-bg text-white">
              <CardHeader>
                <CardTitle className="text-3xl font-bold font-poppins mb-4">
                  Ready to Begin Your Journey?
                </CardTitle>
                <CardDescription className="text-white/90 text-lg">
                  Join the next cohort of passionate contributors and make your mark on the world of open knowledge
                </CardDescription>
              </CardHeader>
              <CardContent className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-6"
                >
                  <Button
                    size="lg"
                    variant="secondary"
                    className="text-lg px-8 py-4 hover-glow"
                    onClick={() => window.open("https://docs.google.com/forms/u/2/d/e/1FAIpQLSdhllqy5J27BOytcHiELSH9amZVHED_qxgyYb7mSyCem1mpRg/viewform?usp=send_form", "_blank")}
                  >
                    Apply for Next Cohort <ExternalLink className="ml-2 h-6 w-6" />
                  </Button>
                </motion.div>
                <p className="text-white/80 text-sm">
                  Applications are open! Limited seats available for each cohort.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default RoadToWiki;