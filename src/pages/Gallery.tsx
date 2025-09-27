import { motion, AnimatePresence } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Camera, X, Calendar, MapPin } from "lucide-react"
import { Link } from "react-router-dom"
import { useState } from "react"

// Sample event gallery data
const eventGallery = [
  {
    id: 1,
    title: "Tech Innovation Workshop 2024",
    date: "March 15, 2024",
    location: "Main Auditorium",
    image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=300&fit=crop"
  },
  {
    id: 2,
    title: "Open Source Hackathon",
    date: "February 20, 2024",
    location: "Computer Lab",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=400&h=300&fit=crop"
  },
  {
    id: 3,
    title: "Community Meetup",
    date: "January 10, 2024",
    location: "Student Center",
    image: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=400&h=300&fit=crop"
  },
  {
    id: 4,
    title: "Wiki Edit-a-thon",
    date: "December 5, 2023",
    location: "Library Conference Room",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=300&fit=crop"
  },
  {
    id: 5,
    title: "Python Programming Workshop",
    date: "November 18, 2023",
    location: "Room 204",
    image: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=300&fit=crop"
  },
  {
    id: 6,
    title: "Web Development Bootcamp",
    date: "October 25, 2023",
    location: "Tech Lab",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop"
  },
  {
    id: 7,
    title: "AI/ML Seminar",
    date: "September 12, 2023",
    location: "Lecture Hall A",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=300&fit=crop"
  },
  {
    id: 8,
    title: "GitHub Workshop",
    date: "August 30, 2023",
    location: "Room 105",
    image: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=400&h=300&fit=crop"
  },
  {
    id: 9,
    title: "Data Science Workshop",
    date: "July 15, 2023",
    location: "Data Lab",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop"
  },
  {
    id: 10,
    title: "Mobile App Development",
    date: "June 20, 2023",
    location: "Mobile Lab",
    image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=300&fit=crop"
  },
  {
    id: 11,
    title: "Cybersecurity Awareness",
    date: "May 8, 2023",
    location: "Security Lab",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=400&h=300&fit=crop"
  },
  {
    id: 12,
    title: "Cloud Computing Summit",
    date: "April 22, 2023",
    location: "Main Conference Hall",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&h=600&fit=crop",
    thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop"
  }
]

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<any>(null)

  const openModal = (event: any) => {
    setSelectedImage(event)
  }

  const closeModal = () => {
    setSelectedImage(null)
  }

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header Section */}
      <section className="pt-20 pb-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >

            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="w-24 h-24 rounded-full gradient-bg flex items-center justify-center mx-auto mb-6"
            >
              <Camera className="h-12 w-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 font-poppins">
              Event Gallery
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Relive the memorable moments from our workshops, events, hackathons, and community 
              gatherings. Each event represents our journey in promoting open knowledge and 
              technological innovation.
            </p>
          </motion.div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {eventGallery.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                className="group cursor-pointer"
                onClick={() => openModal(event)}
              >
                <Card className="glass hover-lift overflow-hidden h-full">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={event.thumbnail}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-2 left-2 right-2 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                      <h3 className="font-semibold text-sm line-clamp-2">
                        {event.title}
                      </h3>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <h3 className="font-semibold text-lg mb-2 text-foreground font-poppins line-clamp-2">
                      {event.title}
                    </h3>
                    <div className="space-y-1 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 mr-2" />
                        {event.date}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="h-4 w-4 mr-2" />
                        {event.location}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for enlarged image */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.5, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <Card className="glass overflow-hidden">
                <div className="relative">
                  <img
                    src={selectedImage.image}
                    alt={selectedImage.title}
                    className="w-full h-auto max-h-[70vh] object-contain"
                  />
                  <Button
                    variant="ghost"
                    size="icon"
                    className="absolute top-2 right-2 bg-black/50 text-white hover:bg-black/70"
                    onClick={closeModal}
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-bold gradient-text mb-4 font-poppins">
                    {selectedImage.title}
                  </h2>
                  <div className="flex flex-wrap gap-4 text-foreground/80">
                    <div className="flex items-center">
                      <Calendar className="h-5 w-5 mr-2 text-primary" />
                      {selectedImage.date}
                    </div>
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      {selectedImage.location}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default Gallery