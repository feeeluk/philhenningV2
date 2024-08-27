import Project from "@/app/components/Project"

export default function Projects() {
    return(
      <>
        <Project
          name="Who wants to be less of a peasant?"
          type="Project"
          language="Next.js"
          db="PostgreSQL"
          image="peasant_screenshot.png"
          description="Built on the back of completing the Tech-Educators 'Software Development' bootcamp. Built using Next.js."
        />

        <Project
          name="Race V2"
          type="Project"
          language="C# & Entity Framework"
          db="MSQLS"
          image="car_race_screenshot.png"
          description="This has become my first 'real' C# project, and I am using it as a means of implementing things that I have learned.

          This is modelled on a race concept (multiple vehicles, multiple teams, multiple race circuits), which allows plenty of scope for creating objects, lists, inhertance, polymorphism, interfaces, etc..
          Creating a 'larger' project then in turn introduces further challenges, such as menu design, and starts to explore 'what does a user of this program want to achieve?'."
                    />

        <Project
          name="C# Fundamentals (Pluralsight)"
          type="Course"
          language="C#"
          db="none"
          image="c_sharp_fundamentals_screenshot.png"
          description="A tutorial that consisted of 11 lessons.

          Delivered by Scott Alan.

          Content included:
          Visual Studio Code, using CMD to control the CLI, creating methods & classes, creating software that flows through different classes and methods, passing and returning data, creating and running unit tests,	
          Workout	C#	My first attempt at creating a project to solve a simple problem."
        />
        
        <Project
          name="Race V1"
          type="Project"
          language="C#"
          db="none"
          image="car_race_screenshot.png"
          description="This was the first incarnation of the 'Race' project."
        />

        <Project
          name="Workout"
          type="Project"
          language="C#"
          db="none"
          image="workout_screenshot.png"
          description="	My first attempt at creating a project to solve a simple problem.

          I wanted a program to be able to generate a list of random excercises for me based on two parameters:
          1) How much time I have for a workout
          2) How difficult I want the workout to be"
        />

        <Project
          name="C# for beginners (Bro Code)"
          type="Course"
          language="C'"
          db="none"
          image="brocode_screenshot.png"
          description="	A tutorial that consists of 50 lessons.

          Including:
          variables, type casting, arithmetic operators, string methods, if statements, switches, logical operators, while loops, for loops, nested loops, arrays, foreach loops, methods, return keyword, method overloading, params keyword, exception handling, conditional operator, string interpolation, multidimensional arrays, classes, objects, constructors, static keyword, overloaded constructors, inheritance, abstract classes, array of objects, objects as arguments, method overriding, ToString method, polymorphism, interfaces, lists, list of objects, getters and setters, auto implemented properties, enums, generics, multi-threading."
        />

        <Project
          name="TreeData"
          type="Proof of concept"
          language="PHP, HTML, CSS"
          db="MySQL"
          image="treedata_screenshot.png"
          description="This is a current Proof Of Concept for a commercial client (although undertaken without recompense).

          The client wishes to provide his clients with the means to view data about specific trees on a given site. My client 'tags' each tree that he surveys with a physical metal disc that has an identifier - albeit not a universally unique identifier, only unique to the site.
          The POC is purely based on data, hence there the low-fi visuals."
        />

        <Project
          name="philhenning.co.uk"
          type="Project"
          language="Next.js, HTML, CSS"
          db="none"
          image="philhenning_screenshot.png"
          description="The site you are currently looking at is a project of mine that I am still regularly working on."
        />

        <Project
          name="Snowcompare"
          type="Project"
          language="PHP, HTML, CSS"
          db="MySQL"
          image="snowcompare_screenshot.png"
          description="This was my first piece of web development coursework at university. Primarily made to showcase my development skills."
        />

        <Project
          name="Snowcompare shop"
          type="Project"
          language="PHP, HTML, CSS"
          db="MySQL"
          image="snowcompare_shop_screenshot.png"
          description="This was my second piece of web development coursework at university. Building upon the first project above, the purpose of this project was to focus on an 'e-commerce' back-end."
        />

        <Project
          name="Points Academy"
          type="Proof of concept"
          language="PHP, HTML. CSS"
          db="MySQL"
          image="points_academy_screenshot.png"
          description=""
        />

        <Project
          name="Commercial Sales Portal"
          type="Proof of concept"
          language="PHP, HTML, CSS"
          db="MySQL"
          image="portal_screenshot.png"
          description="Initially conceived as a short-term tool to help a brand new sales team get up to speed with learning the particulars of various products. It subsequently evolved into a more substantial long-term tool that was regularly used. This first iteration was purely static. The next iteration (SimplePortal System - see below) would take that next evolutionary step."
        />
      </>
    )
  }