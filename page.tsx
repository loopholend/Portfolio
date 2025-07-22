"use client"

import { Github, Linkedin, Mail, Code, Database, Globe } from "lucide-react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Portfolio() {
  const skills = ["C", "C++", "Java (Core & Advanced)"]

  const nonTechnicalSkills = ["Problem Solving", "Algorithms", "Data Structures", "Teamwork", "Communication"]

  const competitivePlatforms = ["CodeChef", "LeetCode", "HackerRank", "Codeforces"]

  const projects = [
    {
      title: "TICTAKTOE Game",
      description:
        "A feature-rich Java TicTacToe game with AI opponent, tournament mode, multiple themes, sound effects, and comprehensive statistics tracking.",
      tech: ["Java"],
      github: "https://github.com/loopholend/TicTacToe",
      demo: "#",
    },
    {
      title: "Algorithm Visualizer",
      description:
        "A C++ console-based, menu-driven algorithm visualizer for classic sorting and searching algorithms. Enter any array and step through Bubble, Insertion, Merge, Quick, Count, Radix sort, and searches, with detailed step-by-step output for easy learning.",
      tech: ["C++", "Data Structures"],
      github: "https://github.com/loopholend/Algorithm-Visualizer/tree/main",
      demo: "#",
    },
    {
      title: "Competitive Programming Solutions",
      description:
        "Collection of optimized solutions for various competitive programming problems from CodeChef, LeetCode, and Codeforces.",
      tech: ["C++", "Java", "Algorithms"],
      github: "https://github.com/loopholend",
      demo: "#",
    },
  ]

  const experience = [
    {
      title: "Bachelor of Technology (BTech)",
      company: "Computer Science & Engineering - Acropolis Institute of Technology and Research, Indore",
      period: "2023-2027",
      description:
        "Currently pursuing BTech in Computer Science & Engineering with CGPA: 6.9. Active participant in programming competitions and hackathons.",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-gray-700 bg-gray-900/95 backdrop-blur supports-[backdrop-filter]:bg-gray-900/60">
        <div className="container flex h-14 items-center">
          <div className="mr-4 flex">
            <Link href="/" className="mr-6 flex items-center space-x-2">
              <Code className="h-6 w-6 text-white" />
              <span className="font-bold text-white">Pranjal Pal</span>
            </Link>
          </div>
          <nav className="flex items-center space-x-6 text-sm font-medium">
            <Link href="#about" className="text-white transition-colors hover:text-gray-300">
              About
            </Link>
            <Link href="#projects" className="text-white transition-colors hover:text-gray-300">
              Projects
            </Link>
            <Link href="#experience" className="text-white transition-colors hover:text-gray-300">
              Experience
            </Link>
            <Link href="#contact" className="text-white transition-colors hover:text-gray-300">
              Contact
            </Link>
          </nav>
          <div className="ml-auto flex items-center space-x-2">
            <Button variant="ghost" size="icon" asChild className="text-white hover:text-gray-300">
              <Link href="https://github.com/loopholend" target="_blank">
                <Github className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-white hover:text-gray-300">
              <Link href="https://www.linkedin.com/in/pranjal-pal-a87b6a283/" target="_blank">
                <Linkedin className="h-4 w-4" />
              </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild className="text-white hover:text-gray-300">
              <Link href="https://leetcode.com/u/loopholend/" target="_blank">
                <Code className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container py-24 md:py-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl text-white">
              Hi, I'm <span className="text-blue-400">Pranjal Pal</span>
            </h1>
            <p className="mx-auto max-w-[700px] text-gray-200 md:text-xl">
              Motivated and detail-oriented Computer Science student with a strong track record in programming
              competitions, hackathons, and consistent academic performance. Skilled in C++, Java, and C with a keen
              interest in software development, problem-solving, and algorithms.
            </p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center">
            <Badge variant="secondary" className="flex items-center gap-1 bg-gray-700 text-white">
              <Globe className="h-3 w-3" />
              Indore, India
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 bg-gray-700 text-white">
              <Database className="h-3 w-3" />
              Backend Systems
            </Badge>
            <Badge variant="secondary" className="flex items-center gap-1 bg-gray-700 text-white">
              <Code className="h-3 w-3" />
              Competitive Programmer
            </Badge>
          </div>
          <div className="flex gap-4">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
            >
              <Link href="#projects">View My Work</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="container py-24 bg-gray-800/50">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-center text-white">About Me</h2>
          <Card className="bg-gray-800 border-gray-600">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-6 text-white">
                I'm a passionate Computer Science student with expertise in competitive programming and software
                development. I enjoy solving complex problems and building scalable applications that make a difference.
              </p>
              <p className="text-lg leading-relaxed mb-8 text-white">
                With experience in multiple programming languages and active participation in hackathons, I bring a
                comprehensive approach to every project. I'm always eager to learn new technologies and stay up-to-date
                with industry best practices.
              </p>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-white">Programming Languages</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {skills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-gray-500 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4 text-white">Non-Technical Skills</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {nonTechnicalSkills.map((skill) => (
                    <Badge key={skill} variant="outline" className="border-gray-500 text-white">
                      {skill}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-4 text-white">Competitive Platforms</h3>
                <div className="flex flex-wrap gap-2">
                  {competitivePlatforms.map((platform) => (
                    <Badge key={platform} variant="outline" className="border-gray-500 text-white">
                      {platform}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="container py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center text-white">
            Certifications & Achievements
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">CodeChef Certification</CardTitle>
                <CardDescription className="text-gray-300">CodeChef • Jul 2025 – Present</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">Spoken Tutorial – C & Java</CardTitle>
                <CardDescription className="text-gray-300">IIT Bombay • Apr 2025 – Present</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">CODESPIRE 2.0: Ultimate Coding Battle</CardTitle>
                <CardDescription className="text-gray-300">GDSC AITR • Dec 2024 – Present</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">Google Developer Student Clubs</CardTitle>
                <CardDescription className="text-gray-300">Member • Nov 2024 – Present</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">Parul Hack Verse Hackathon 2025</CardTitle>
                <CardDescription className="text-gray-300">Participation • Dec 2024 – Present</CardDescription>
              </CardHeader>
            </Card>
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">Bit N Build Around The World 2024</CardTitle>
                <CardDescription className="text-gray-300">Participation • Oct 2024 – Present</CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="container py-24 bg-gray-800/50">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center text-white">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project, index) => (
              <Card key={index} className="flex flex-col bg-gray-800 border-gray-600">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-white">
                    {project.title}
                    <div className="flex gap-2">
                      <Button variant="ghost" size="icon" asChild className="text-white hover:text-gray-300">
                        <Link href={project.github} target="_blank">
                          <Github className="h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardTitle>
                  <CardDescription className="text-gray-300">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs bg-gray-700 text-white">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="container py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center text-white">Education </h2>
          <div className="space-y-8">
            {experience.map((exp, index) => (
              <Card key={index} className="bg-gray-800 border-gray-600">
                <CardHeader>
                  <div className="flex justify-between items-center">
                    <div>
                      <CardTitle className="text-white">{exp.title}</CardTitle>
                      <CardDescription className="text-lg font-medium text-blue-400">{exp.company}</CardDescription>
                    </div>
                    <Badge variant="outline" className="border-gray-500 text-white">
                      {exp.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-200">{exp.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Competitive Programming Section */}
      <section className="container py-24 bg-gray-800/50">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tighter mb-12 text-center text-white">Competitive Programming</h2>
          <Card className="bg-gray-800 border-gray-600">
            <CardContent className="p-8">
              <p className="text-lg leading-relaxed mb-8 text-white text-center">
                Active competitive programmer with experience across multiple platforms. I regularly participate in
                contests and solve algorithmic challenges to sharpen my problem-solving skills.
              </p>
              <div className="grid gap-6 md:grid-cols-2">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-gray-600 text-white hover:bg-gray-700 bg-transparent h-16"
                >
                  <Link href="https://leetcode.com/u/loopholend/" target="_blank" className="flex items-center gap-3">
                    <Code className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">LeetCode</div>
                      <div className="text-sm text-gray-300">@loopholend</div>
                    </div>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-gray-600 text-white hover:bg-gray-700 bg-transparent h-16"
                >
                  <Link
                    href="https://www.hackerrank.com/pranjalpal05"
                    target="_blank"
                    className="flex items-center gap-3"
                  >
                    <Code className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">HackerRank</div>
                      <div className="text-sm text-gray-300">@pranjalpal05</div>
                    </div>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-gray-600 text-white hover:bg-gray-700 bg-transparent h-16"
                >
                  <Link
                    href="https://www.codechef.com/users/loopholend"
                    target="_blank"
                    className="flex items-center gap-3"
                  >
                    <Code className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">CodeChef</div>
                      <div className="text-sm text-gray-300">@loopholend</div>
                    </div>
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="border-gray-600 text-white hover:bg-gray-700 bg-transparent h-16"
                >
                  <Link
                    href="https://codeforces.com/profile/pranjalpal05"
                    target="_blank"
                    className="flex items-center gap-3"
                  >
                    <Code className="h-6 w-6" />
                    <div className="text-left">
                      <div className="font-semibold">Codeforces</div>
                      <div className="text-sm text-gray-300">@loopholend</div>
                    </div>
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="container py-24">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tighter mb-8 text-white">Get In Touch</h2>
          <p className="text-lg text-gray-200 mb-8">
            I'm always open to discussing new opportunities and interesting projects. Let's connect and see how we can
            work together!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="mailto:pranjalpal05@gmail.com" className="flex items-center gap-2">
                <Mail className="h-4 w-4" />
                Send Email
              </Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              asChild
              className="border-gray-600 text-white hover:bg-gray-800 bg-transparent"
            >
              <Link
                href="https://www.linkedin.com/in/pranjal-pal-a87b6a283/"
                target="_blank"
                className="flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" />
                LinkedIn
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-700 py-8 bg-gray-900">
        <div className="container text-center text-gray-300">
          <p>&copy; 2025 Pranjal Pal. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}
