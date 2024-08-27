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
        <ItemSkill name="C#" image="CSharp.png" />
        <ItemSkill name="Entity Framework" image="EntityFramework.png" />
        <ItemSkill name=".Net" image="DotNET.png" />
        <ItemSkill name="JavaScript" image="JS.png" />
        <ItemSkill name="React" image="React.png" />
        <ItemSkill name="Next.js" image="Next.png" />
        <ItemSkill name="HTML" image="HTML.png" />
        <ItemSkill name="CSS" image="CSS.png" />
        <ItemSkill name="PHP" image="PHP.png" />
      </div>

      <h3>Experience with database systems</h3>

      <div className="ItemContainer">
        <ItemDb name="SQL" image="SQL.png" />
        <ItemDb name="MySQL" image="MySQL.png" />
        <ItemDb name="phpMyAdmin" image="phpMyAdmin.png" />
        <ItemDb name="MSSQLS" image="MSSQLS.png" />
        <ItemDb name="SQL Server Management Studio" image="MSSMS.png" />
        <ItemDb name="PostgreSQL" image="Postgre.png" />
      </div>

      <h3>Experience with Agile Methodologies</h3>

      <div className="ItemContainer">
        <ItemAgile name="SCRUM" image="SCRUM.png" />
        <ItemAgile name="SAFE" image="SAFE.png" />
      </div>

      <h3>Experience with Tools</h3>

      <div className="ItemContainer">
        <ItemTool name="GIT" image="GIT.png" />
        <ItemTool name="Trello" image="Trello.png" />
        <ItemTool name="Azure DevOps" image="Azure.png" />
        <ItemTool name="Miro" image="Miro.png" />
        <ItemTool name="Visual Studio" image="VisualStudio.png" />
        <ItemTool name="VS Code" image="VSCode.png" />
        <ItemTool name="Teams" image="Teams.png" />
        <ItemTool name="Slack" image="Slack.png" />
        <ItemTool name="Discord" image="Discord.png" />
        <ItemTool name="Ubuntu" image="Ubuntu.png" />
      </div>
      
    </>
  )
}