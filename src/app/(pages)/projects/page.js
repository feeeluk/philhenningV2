import Project from "@/app/components/Project"
import { Hover2 } from "@/app/components/animations/Hover2"

export default function Projects() {
    return(
      <>
        <Hover2>
          <Project
            name="Who wants to be less of a peasant?"
            type="Project"
            language="JavaScript (Next.js)"
            db="PostgreSQL"
            projectManagementTool="Trello, "
            whiteBoardingTool="Miro"
            link="https://peasant.philhenning.co.uk"
            image="peasant_screenshot.png"
            description="Built on the back of completing the Tech-Educators 'Software DeveloprojectManagementToolent' bootcamp. Built using Next.js."
          />
        </Hover2>

        <Hover2>
          <Project
            name="Race V2"
            type="Project"
            language="C#, Entity Framework"
            db="MSQLS"
            projectManagementTool="Trello, "
            whiteBoardingTool="Miro"
            link=""
            image="car_race_screenshot.png"
            description="This has become my first 'real' C# project, and I am using it as a means of implementing things that I have learned.

            This is modelled on a race concept (multiple vehicles, multiple teams, multiple race circuits), which allows plenty of scope for creating objects, lists, inhertance, polymorphism, interfaces, etc..
            Creating a 'larger' project then in turn introduces further challenges, such as menu design, and starts to explore 'what does a user of this program want to achieve?'."
          />
        </Hover2>

        <Hover2>
          <Project
            name="C# Fundamentals (Pluralsight)"
            type="Course"
            language="C#"
            db=""
            projectManagementTool=""
            whiteBoardingTool=""
            link=""
            image="c_sharp_fundamentals_screenshot.png"
            description="A tutorial that consisted of 11 lessons.

            Delivered by Scott Alan.

            Content included:
            Visual Studio Code, using CMD to control the CLI, creating methods & classes, creating software that flows through different classes and methods, passing and returning data, creating and running unit tests,	
            Workout	C#	My first attempt at creating a project to solve a simple problem."
          />
        </Hover2>
        
        <Hover2>
          <Project
            name="Race V1"
            type="Project"
            language="C#"
            db=""
            projectManagementTool=""
            whiteBoardingTool=""
            link=""
            image="car_race_screenshot.png"
            description="This was the first incarnation of the 'Race' project."
          />
        </Hover2>

        <Hover2>
          <Project
            name="Workout"
            type="Project"
            language="C#"
            db=""
            projectManagementTool=""
            whiteBoardingTool=""
            link=""
            image="workout_screenshot.png"
            description="	My first attempt at creating a project to solve a simple problem.

            I wanted a program to be able to generate a list of random excercises for me based on two parameters:
            1) How much time I have for a workout
            2) How difficult I want the workout to be"
          />
        </Hover2>

        <Hover2>
          <Project
            name="C# for beginners (Bro Code)"
            type="Course"
            language="C#"
            db=""
            projectManagementTool=""
            whiteBoardingTool=""
            link=""
            image="brocode_screenshot.png"
            description="	A tutorial that consists of 50 lessons.

            Including:
            variables, type casting, arithmetic operators, string methods, if statements, switches, logical operators, while loops, for loops, nested loops, arrays, foreach loops, methods, return keyword, method overloading, params keyword, exception handling, conditional operator, string interpolation, multidimensional arrays, classes, objects, constructors, static keyword, overloaded constructors, inheritance, abstract classes, array of objects, objects as arguments, method overriding, ToString method, polymorphism, interfaces, lists, list of objects, getters and setters, auto implemented properties, enums, generics, multi-threading."
          />
        </Hover2>

        <Hover2>
          <Project
            name="TreeData"
            type="Proof of concept"
            language="PHP, HTML, CSS"
            db="MySQL"
            projectManagementTool="Trello, "
            whiteBoardingTool=""
            link="http://treedata.co.uk"
            image="treedata_screenshot.png"
            description="This is a current Proof Of Concept for a commercial client (although undertaken without recompense).

            The client wishes to provide his clients with the means to view data about specific trees on a given site. My client 'tags' each tree that he surveys with a physical metal disc that has an identifier - albeit not a universally unique identifier, only unique to the site.
            The POC is purely based on data, hence there the low-fi visuals."
          />
        </Hover2>

        <Hover2>
          <Project
            name="philhenning.co.uk"
            type="Project"
            language="Next.js, HTML, CSS"
            db=""
            projectManagementTool="Trello, "
            whiteBoardingTool="Miro "
            link=""
            image="philhenning_screenshot.png"
            description="The site you are currently looking at is a project of mine that I am still regularly working on."
          />
        </Hover2>

        <Hover2>
          <Project
            name="Snowcompare"
            type="Project"
            language="PHP, HTML, CSS"
            db="MySQL"
            projectManagementTool=""
            whiteBoardingTool=""
            link="https://snowcompare.philhenning.co.uk"
            image="snowcompare_screenshot.png"
            description="This was my first piece of web development coursework at university. Primarily made to showcase my development skills. Use 'username: phil password: phil'"
          />
        </Hover2>

        <Hover2>
          <Project
            name="Snowcompare shop"
            type="Project"
            language="PHP, HTML, CSS"
            db="MySQL"
            projectManagementTool=""
            whiteBoardingTool=""
            link="https://snowcompareshop.philhenning.co.uk"
            image="snowcompare_shop_screenshot.png"
            description="This was my second piece of web development coursework at university. Building upon the first project above, the purpose of this project was to focus on an 'e-commerce' back-end. Use 'username: phil password: phil'"
          />
        </Hover2>

        <Hover2>
          <Project
            name="Points Academy"
            type="Proof of concept"
            language="PHP, HTML. CSS"
            db="MySQL"
            projectManagementTool=""
            whiteBoardingTool=""
            link="https://pointsacademy.philhenning.co.uk"
            image="points_academy_screenshot.png"
            description="This client had a highly successful line of orthapedic products for which they already had a reward system in place, however the administration involved was significant and laborious. This proof of concept application successfully demonstrated that the process could be transformed to digital with ease, and could - at the same time - provide existing customers an online platform to manage their reward account. The concept was eventually adopted by the company."
          />
        </Hover2>

        <Hover2>
          <Project
            name="Commercial Sales Portal"
            type="Proof of concept"
            language="PHP, HTML, CSS"
            db="MySQL"
            projectManagementTool=""
            whiteBoardingTool=""
            link="https://portal.philhenning.co.uk"
            image="portal_screenshot.png"
            description="Initially conceived as a short-term tool to help a brand new sales team get up to speed with learning the particulars of various products. It subsequently evolved into a more substantial long-term tool that was regularly used. This first iteration was purely static. The next iteration (SimplePortal System - see below) would take that next evolutionary step."
          />
        </Hover2>
      </>
    )
  }