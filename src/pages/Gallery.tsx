import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Camera, Clock } from "lucide-react"
import { Link } from "react-router-dom"

const Gallery = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <section className="pt-20 pb-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Link to="/">
              <Button variant="outline" className="mb-8 hover-lift">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>

            <div className="max-w-2xl mx-auto">
              <Card className="glass hover-lift">
                <CardContent className="p-12 text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3, type: "spring" }}
                    className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6"
                  >
                    <Camera className="h-12 w-12 text-white" />
                  </motion.div>
                  
                  <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 font-poppins">
                    Gallery
                  </h1>
                  
                  <div className="flex items-center justify-center mb-6">
                    <Clock className="h-5 w-5 text-muted-foreground mr-2" />
                    <span className="text-muted-foreground">Coming Soon</span>
                  </div>
                  
                  <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
                    Our photo gallery is currently under development. Soon you'll be able to browse 
                    through memorable moments from our workshops, events, hackathons, and community 
                    gatherings.
                  </p>
                  
                  <p className="text-foreground/70">
                    Stay tuned for amazing captures of our journey in promoting open knowledge and 
                    technological innovation!
                  </p>
                </CardContent>
              </Card>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Gallery