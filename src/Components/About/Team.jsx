import React from 'react'
import Backdrop from '@mui/material/Backdrop';
import BackDropDesc from "./BackDropDesc";

function Team() {
    const [open, setOpen] = React.useState(false);
    const [img, setImg] = React.useState("");
    const [name, setName] = React.useState("");
    const [job, setJob] = React.useState("");
    const [desc, setDesc] = React.useState("");
    const [account, setAccount] = React.useState("");
  
    const handleClose = () => {
      setOpen(false);
      setImg("");
      setName("");
      setJob("");
      setDesc("");
    };
    
  
    const teamMember= [
      {
        "img": "img/team/01.jpg",
        "name": "SWAPNAJA KULKARNI",
        "job": "MD and CEO",
        "desc": `She is  the  co-founder of Edubrix, a biotechnologist by training. She has worked in cross-functional teams with Financial MNCs such as National Stock Exchange, Kotak, and Edelweiss as a Business Analyst.
        
        A trusted overseas education adviser who has helped pupils succeed academically abroad. Has extensive knowledge of global education, immigration, and university admissions. Dedicated to helping students accomplish their worldwide educational and career goals.  
        
        She helps students identify relevant institutions, choose appropriate courses, manage applications, and comprehend visa and immigration requirements while applying to overseas universities or colleges, visa applications, and pre-departure preparations. 
        
        Strong communication, active listening, and relationship building skills to identify and meet student and parent needs. Understanding and respecting other cultures and providing culturally relevant guidance and support. Able to analyze difficult circumstances, find answers, and make student-beneficial judgments.
        
        Following international education consultancy ethics and best practices to protect students’ interests. A focus on student needs and goals in decision-making. Staying current on overseas education legislation, visa regulations, and institution offerings to provide accurate and relevant guidance.`,
        linkedin:"https://www.linkedin.com/in/swapnaja-kulkarni-4712601a7/"
      },
      {
        "img": "img/team/02.jpg",
        "name": "CA ABHISHEK KULKARNI",
        "job": "Director-Training",
        "desc":`Edubrix was founded by a Chartered Accountant by training and a German Trainer by passion. With over 6 years of corporate experience, he has worked as a Business Analyst for M&M, The National Stock Exchange, and Asian CERC. 
        
  
        A skilled and devoted German language teacher with experience teaching varied learners. Experience establishing effective language programs, using interactive teaching methods, and creating a supportive learning atmosphere for optimal language acquisition. Goethe Zertifikat for teaching German abroad. 
        
        Highly experienced teaching beginner, intermediate, and advanced German. Experience teaching youngsters to adults and adapting strategies. Experience in customized training for exams, corporate communication, academia, or industry needs. Trained executives at Siemens, Patni, and Actisys, to name a few. 
        
        Ability to create and implement structured lesson plans using a range of resources, activities, and assessments to improve learning. Marathi, Hindi, and English aid communication with non-German learners.`,
        linkedin:"https://www.linkedin.com/in/abhishek-kulkarni-341a74211/"
      }
    ]
  
    return (
      <div id="team" className="text-center">
        <div className="container">
          <div className="section-title">
            <h2>Meet the Team</h2>
            <p>
            At <span className="firstPart">Edu</span><span className="secondPart">Brix</span>, our team is the cornerstone of our success. Each member brings a unique blend of expertise, passion, and innovation, united by a shared vision to guide students toward global opportunities. With a commitment to excellence and personalized support, our team ensures every student’s journey is inspiring, empowering, and impactful.
            </p>
          </div>
          <div className="members" >
              {teamMember.map((d, i) => (
                <div>
                    <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 member" onClick={
                      ()=>{
                        setOpen(true);
                        setImg(d.img);
                        setName(d.name);
                        setJob(d.job);
                        setDesc(d.desc);
                        setAccount(d.linkedin);
                      }
                    }>
                      <div className="thumbnail">
                        {" "}
                        <img src={d.img} alt="team Member images" className="team-img" />
                        <div className="caption">
                          <h4>{d.name}</h4>
                          <p>{d.job}</p>
                          <p><span className="firstPart">Edu</span><span className="secondPart">Brix</span></p>
                          <p>
                            <a href={d.linkedin} className="linkedin-link">
                              Linked
                              <i className="fa fa-linkedin linkedin-icon" aria-hidden="true"></i>
                            </a>
                          </p>
                        </div>
                      </div>
                    </div>
                </div>
                  ))}
                  
            </div>
         
        </div>
        <Backdrop
                  sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                  open={open}
                  onClick={handleClose}
                  >
                    <BackDropDesc name={name} image={img} job={job} desc={desc} account={account}/>
                  </Backdrop>
      </div>
    );
}

export default Team