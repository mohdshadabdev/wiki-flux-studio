import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, BookOpen, Code, Heart, Target, Lightbulb, ArrowLeft } from "lucide-react"
import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="pt-20 pb-8 gradient-bg">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 font-poppins">
              About Wiki Club Tech
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              United University's Gateway to Open Knowledge
            </p>
          </motion.div>
        </div>
      </section>

      {/* Wiki Club Tech Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <Card className="glass hover-lift mb-12">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full gradient-bg flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold font-poppins">
                  What is Wiki Club Tech?
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-foreground/80 leading-relaxed">
                <p className="mb-6">
                  Wiki Club Tech at United University is more than just a student organization – it's a 
                  movement dedicated to democratizing knowledge and fostering technological innovation. 
                  Founded on the principles of open collaboration and community-driven learning, we serve 
                  as the bridge between academic excellence and real-world impact.
                </p>
                <p className="mb-6">
                  Our club operates at the intersection of technology, education, and social impact. We 
                  believe that every student has the potential to contribute meaningfully to the global 
                  knowledge ecosystem, and we provide the tools, training, and community support needed 
                  to make that vision a reality.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Wikimedia Foundation Deep Dive */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins gradient-text">
                The Wikimedia Foundation
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Understanding the Global Movement Behind Free Knowledge
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="glass hover-lift">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <Globe className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-xl font-semibold">Global Vision</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">
                    The Wikimedia Foundation envisions a world where every human being can freely share 
                    in the sum of all knowledge. This nonprofit organization operates Wikipedia, the 
                    world's largest encyclopedia, available in over 300 languages and reaching 1.7 
                    billion unique visitors monthly.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass hover-lift">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <BookOpen className="h-8 w-8 text-primary mr-3" />
                    <CardTitle className="text-xl font-semibold">Projects & Impact</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-foreground/80 leading-relaxed">
                    Beyond Wikipedia, the Foundation maintains Wikidata, Wikimedia Commons, Wiktionary, 
                    Wikibooks, and more. Together, these projects form the largest collection of freely 
                    usable knowledge resources in human history, supporting education and research worldwide.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Open Source & Its Importance */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
                The Power of Open Source
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Why Open Knowledge and Open Source Matter More Than Ever
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="glass hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Code className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Innovation</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/80">
                    Open source accelerates innovation by allowing developers worldwide to collaborate, 
                    share ideas, and build upon each other's work.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Accessibility</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/80">
                    Open source ensures technology and knowledge remain accessible to everyone, 
                    regardless of economic background or geographic location.
                  </p>
                </CardContent>
              </Card>

              <Card className="glass hover-lift">
                <CardHeader className="text-center">
                  <div className="w-12 h-12 rounded-full gradient-bg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <CardTitle className="text-lg font-semibold">Transparency</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-foreground/80">
                    Open source promotes transparency, accountability, and trust by making source code 
                    and processes visible to all stakeholders.
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Mission & Values */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="glass hover-lift max-w-4xl mx-auto gradient-bg text-white">
              <CardHeader className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-white" />
                  </div>
                </div>
                <CardTitle className="text-3xl font-bold font-poppins mb-4">
                  Our Mission & Values
                </CardTitle>
              </CardHeader>
              <CardContent className="text-lg text-white/90 leading-relaxed space-y-6">
                <p>
                  <strong className="text-white">Empowerment:</strong> We empower students with the skills, 
                  knowledge, and confidence needed to contribute meaningfully to open source projects and 
                  Wikipedia editing.
                </p>
                <p>
                  <strong className="text-white">Community:</strong> We foster a supportive, inclusive 
                  community where collaboration thrives and every voice is valued.
                </p>
                <p>
                  <strong className="text-white">Impact:</strong> We focus on creating real-world impact 
                  through our contributions to global knowledge repositories and open source projects.
                </p>
                <p>
                  <strong className="text-white">Learning:</strong> We promote continuous learning and 
                  growth, both in technical skills and in understanding the broader implications of 
                  open knowledge.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Join Us */}
      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins gradient-text">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join Wiki Club Tech and become part of a global movement towards open knowledge and 
              collaborative innovation.
            </p>
            <Link to="/#road-to-wiki">
              <Button size="lg" className="gradient-bg hover-glow text-lg px-8 py-3">
                Explore Our Programs
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About