import ItemSkill from "@/app/components/ItemSkill"
import ItemAgile from "@/app/components/ItemAgile"
import ItemTool from "@/app/components/ItemTool"
import ItemDb from "@/app/components/ItemDb"

export default function Home() {

  return(
    <>
      <p>
        I am a seasoned business analyst with over 10 years of industry 
        experience, who has successfully transitioned into software 
        development. I have a strong foundation in coding, supported by a 
        recent completion of a software development bootcamp with Tech 
        Educators (August 2024). My technical skills span a range of 
        languages and frameworks, including C#, React, Next.js, and PHP, 
        with proficiency in the following database systems: MySQL, MSSQLS, 
        and PostgreSQL. This year alone, I have made 400+ commits to my 
        GitHub account, showcasing my dedication to continuous learning 
        and development through personal projects. My passion for coding 
        dates back to my undergraduate studies, where I focused on 
        software and web development, and I am now fully committed to 
        advancing my career in this field.
      </p>

      <h3>Dev Skills</h3>

      <div className="ItemContainer">
        <ItemSkill
          name="C#"
          image="CSharp.png"
          description="Self-taught, several tutorials and projects."
        />

        <ItemSkill
          name="Entity Framework"
          image="EntityFramework.png"
          description="Self-taught."
        />

        <ItemSkill
          name=".Net"
          image="DotNET.png"
          description="Learning alongside C#, e.g. I am learning Entity Framework."
        />
          
        <ItemSkill
          name="JavaScript"
          image="JS.png"
          description="Self taught and instructor led (software development bootcamp)."
        />
          
        <ItemSkill
          name="React"
          image="React.png"
          description="Self taught and instructor led (software development bootcamp)."
        />
          
        <ItemSkill
          name="Next.js"
          image="Next.png"
          description="Self taught and instructor led (software development bootcamp)."
        />
          
        <ItemSkill
          name="HTML"
          image="HTML.png"
          description="Experienced - created several web sites."
        />
          
        <ItemSkill
          name="CSS"
          image="CSS.png"
          description="Experienced - created several web sites."
        />
          
        <ItemSkill
          name="PHP"
          image="PHP.png"
          description="Somewhat experienced - created several database driven sites."
        />
          
      </div>

      <h3>Experience with database systems</h3>

      <div className="ItemContainer">
        <ItemDb
          name="SQL"
          image="SQL.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="MySQL"
          image="MySQL.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="phpMyAdmin"
          image="phpMyAdmin.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="MSSQLS"
          image="MSSQLS.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="SQL Server Management Studio"
          image="MSSMS.png"
          description="Somewhat experienced."
        />

        <ItemDb
          name="PostgreSQL"
          image="Postgre.png"
          description="Somewhat experienced."
        />

      </div>

      <h3>Experience with Agile Methodologies</h3>

      <div className="ItemContainer">
        <ItemAgile
          name="SCRUM"
          image="SCRUM.png"
          description="Experienced (5+ years). I am a SCRUM advocate."
        />

        <ItemAgile
        name="SAFE"
        image="SAFE.png"
        description="Some experience (6 months)."
        />
      </div>

      <h3>Experience with Tools</h3>

      <div className="ItemContainer">
        <ItemTool
        name="GIT"
        image="GIT.png"
        description="Daily use, familiar with branching & pull requests."
        />

        <ItemTool
        name="Trello"
        image="Trello.png"
        description="Experienced. Daily use."
        />

        <ItemTool
        name="Azure DevOps"
        image="Azure.png"
        description="Experienced."
        />

        <ItemTool
        name="Miro"
        image="Miro.png"
        description="Experienced. Regular use."
        />

        <ItemTool
        name="Visual Studio"
        image="VisualStudio.png"
        description="Somewhat experienced."
        />

        <ItemTool
        name="VS Code"
        image="VSCode.png"
        description="Somewhat experienced."
        />

        <ItemTool
        name="Teams"
        image="Teams.png"
        description="Experienced. Daily use."
        />

        <ItemTool
        name="Slack"
        image="Slack.png"
        description="Experienced. Daily use."
        />

        <ItemTool
        name="Discord"
        image="Discord.png"
        description="Experienced. Daily use."
        />

        <ItemTool
        name="Ubuntu"
        image="Ubuntu.png"
        description="Somewhat experienced. Daily use."
        />

      </div>
      
    </>
  )
}