import { motion } from "framer-motion"
import { Navigation } from "@/components/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Users, Linkedin, Mail, Github } from "lucide-react"
import { Link } from "react-router-dom"

// Sample team data
const leadership = [
  {
    name: "Dr. Sarah Johnson",
    role: "Faculty Coordinator",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/sarahjohnson",
    email: "sarah.johnson@university.edu",
    github: "https://github.com/sarahjohnson"
  },
  {
    name: "Prof. Michael Chen",
    role: "Mentor",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/michaelchen",
    email: "michael.chen@university.edu",
    github: "https://github.com/michaelchen"
  },
  {
    name: "Alex Rodriguez",
    role: "President",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/alexrodriguez",
    email: "alex.rodriguez@student.university.edu",
    github: "https://github.com/alexrodriguez"
  },
  {
    name: "Emma Thompson",
    role: "Vice President",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/emmathompson",
    email: "emma.thompson@student.university.edu",
    github: "https://github.com/emmathompson"
  }
]

const coreTeam = [
  {
    name: "David Kim",
    role: "Technical Lead",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/davidkim",
    email: "david.kim@student.university.edu",
    github: "https://github.com/davidkim"
  },
  {
    name: "Lisa Wang",
    role: "Event Manager",
    image: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/lisawang",
    email: "lisa.wang@student.university.edu",
    github: "https://github.com/lisawang"
  },
  {
    name: "James Wilson",
    role: "Community Outreach",
    image: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/jameswilson",
    email: "james.wilson@student.university.edu",
    github: "https://github.com/jameswilson"
  },
  {
    name: "Maria Garcia",
    role: "Content Creator",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/mariagarcia",
    email: "maria.garcia@student.university.edu",
    github: "https://github.com/mariagarcia"
  },
  {
    name: "Ryan Patel",
    role: "Workshop Coordinator",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/ryanpatel",
    email: "ryan.patel@student.university.edu",
    github: "https://github.com/ryanpatel"
  }
]

const volunteers = [
  {
    name: "Sophie Brown",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/sophiebrown",
    email: "sophie.brown@student.university.edu",
    github: "https://github.com/sophiebrown"
  },
  {
    name: "Tom Miller",
    image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/tommiller",
    email: "tom.miller@student.university.edu",
    github: "https://github.com/tommiller"
  },
  {
    name: "Anna Davis",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/annadavis",
    email: "anna.davis@student.university.edu",
    github: "https://github.com/annadavis"
  },
  {
    name: "Chris Lee",
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/chrislee",
    email: "chris.lee@student.university.edu",
    github: "https://github.com/chrislee"
  },
  {
    name: "Rachel Green",
    image: "https://images.unsplash.com/photo-1485893086445-ed75865251e0?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/rachelgreen",
    email: "rachel.green@student.university.edu",
    github: "https://github.com/rachelgreen"
  },
  {
    name: "Kevin Zhang",
    image: "https://images.unsplash.com/photo-1520813792240-56fc4a3765a7?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/kevinzhang",
    email: "kevin.zhang@student.university.edu",
    github: "https://github.com/kevinzhang"
  },
  {
    name: "Maya Patel",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/mayapatel",
    email: "maya.patel@student.university.edu",
    github: "https://github.com/mayapatel"
  },
  {
    name: "Jake Anderson",
    image: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/jakeanderson",
    email: "jake.anderson@student.university.edu",
    github: "https://github.com/jakeanderson"
  },
  {
    name: "Zoe Williams",
    image: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/zoewilliams",
    email: "zoe.williams@student.university.edu",
    github: "https://github.com/zoewilliams"
  },
  {
    name: "Daniel Taylor",
    image: "https://images.unsplash.com/photo-1504593811423-6dd665756598?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/danieltaylor",
    email: "daniel.taylor@student.university.edu",
    github: "https://github.com/danieltaylor"
  },
  {
    name: "Grace Liu",
    image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/graceliu",
    email: "grace.liu@student.university.edu",
    github: "https://github.com/graceliu"
  },
  {
    name: "Marcus Johnson",
    image: "https://images.unsplash.com/photo-1484515991732-730a48711ff5?w=400&h=400&fit=crop&crop=face",
    linkedin: "https://linkedin.com/in/marcusjohnson",
    email: "marcus.johnson@student.university.edu",
    github: "https://github.com/marcusjohnson"
  }
]

const TeamCard = ({ member, showRole = false }: { member: any, showRole?: boolean }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5 }}
    className="group"
  >
    <Card className="glass hover-lift overflow-hidden h-full">
      <CardContent className="p-8 text-center">
        <div className="relative mb-6 mx-auto w-32 h-32 md:w-36 md:h-36">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full rounded-full object-cover border-4 border-primary/20 group-hover:border-primary/40 transition-all duration-300"
          />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        <h3 className="font-semibold text-lg text-foreground mb-1 font-poppins">
          {member.name}
        </h3>
        
        {showRole && (
          <p className="text-primary font-medium mb-4 text-sm">
            {member.role}
          </p>
        )}
        
        <div className="flex justify-center space-x-3 mt-4">
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => window.open(member.linkedin, '_blank')}
          >
            <Linkedin className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => window.open(`mailto:${member.email}`, '_blank')}
          >
            <Mail className="h-4 w-4" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 hover:bg-primary/10 hover:text-primary transition-colors"
            onClick={() => window.open(member.github, '_blank')}
          >
            <Github className="h-4 w-4" />
          </Button>
        </div>
      </CardContent>
    </Card>
  </motion.div>
)

const Team = () => {
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
              <Users className="h-12 w-12 text-white" />
            </motion.div>
            
            <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6 font-poppins">
              Our Team
            </h1>
            
            <p className="text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed">
              Meet the passionate individuals behind Wiki Club Tech - from organizers and mentors 
              to active contributors and community leaders driving open knowledge and technological innovation.
            </p>
          </motion.div>

          {/* Leadership Section */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl font-bold text-center gradient-text mb-8 font-poppins"
            >
              Leadership Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leadership.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <TeamCard member={member} showRole={true} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Core Team Section */}
          <div className="mb-16">
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="text-3xl font-bold text-center gradient-text mb-8 font-poppins"
            >
              Core Team
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
              {coreTeam.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  <TeamCard member={member} showRole={true} />
                </motion.div>
              ))}
            </div>
          </div>

          {/* Volunteers Section */}
          <div>
            <motion.h2
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
              className="text-3xl font-bold text-center gradient-text mb-8 font-poppins"
            >
              Volunteers
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {volunteers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.9 + index * 0.05 }}
                >
                  <TeamCard member={member} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Team