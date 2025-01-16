import ProjectCard from "./ProjectCard.jsx";


const works = [
    {
      imgSrc: '/project-1.png',
      title: 'Front End DevBurguer',
      tags: ['Tailwind', 'Development'],
      projectLink: 'https://felipe-stack-jpg.github.io/Cardapio/'
    },
    {
      imgSrc: 'project-2.jpg',
      title: 'Front End BarberShop',
      tags: ['Web-Design', 'Development'],
      projectLink: 'https://barber-nine-sage.vercel.app/'
    },
    {
        imgSrc: 'Dashboard.jpg',
        title: 'Front End DashBoard',
        tags: ['Web-Design', 'Next.js'],
        projectLink: 'https://dashboard-theta-gold.vercel.app/'
      },
  ];


const Work = () => {
    return (
        <section id="work" className="section">
            <div className="container">


                <h2 className="headline-2 mb-8 reveal-up">
                    My portfolio highlights
                </h2>

                <div className="grid gap-x-4 gap-y-5 lg:grid-cols-[repeat(auto-fit,_minmax(280px,_1fr))]">
                    {works.map(({imgSrc, title, tags, projectLink}, key) => (
                        <ProjectCard 
                        key={key}
                        imgsrc={imgSrc}
                        title={title}
                        tags={tags}
                        projectLink={projectLink}
                        classes="reveal-up"
                        
                        />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Work