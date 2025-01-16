import PropTypes from 'prop-types'
import SkillCard from "./Skill.Card.jsx";

const skillItem = [
    {
      imgSrc: 'https://www.svgrepo.com/download/354112/nextjs.svg',
      label: 'Nextjs',
      desc: 'Framework'
    },
    {
      imgSrc: '/css3.svg',
      label: 'CSS',
      desc: 'User Interface'
    },
    {
      imgSrc: '/javascript.svg',
      label: 'JavaScript',
      desc: 'Interaction'
    },
    {
      imgSrc: '/nodejs.svg',
      label: 'NodeJS',
      desc: 'Web Server'
    },
    {
      imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/240px-Typescript_logo_2020.svg.png',
      label: 'TypeScript',
      desc: 'Programming Language'
    },
    {
      imgSrc: 'https://suhelmakkad.gallerycdn.vsassets.io/extensions/suhelmakkad/shadcn-ui/0.1.1/1695843310552/Microsoft.VisualStudio.Services.Icons.Default',
      label: 'shadcn/ui',
      desc: 'Design'
    },
    {
      imgSrc: '/react.svg',
      label: 'React',
      desc: 'Framework'
    },
    {
      imgSrc: '/tailwindcss.svg',
      label: 'TailwindCSS',
      desc: 'User Interface'
    },
  ];

const Skill = () => {
    return (
        <section className="section">
            <div className="container">

                <h2 className="headline-2 reveal-up">
                    Essential Tools I use
                </h2>

                <p className="text-zinc-400 mt-3 mb-8 max-w-[50ch]">
                    Discover the powerful tools and technologies I use to create exceptional, high-performing websites & applications.
                </p>

                <div className="grid gap-3 grid-cols-[repeat(auto-fit,_minmax(250px,_1fr))]">
                  {skillItem.map(({imgSrc, label, desc}, key) => (
                    <SkillCard 
                    key={key}
                    imgSrc={imgSrc} 
                    label={label} 
                    desc={desc}
                    classes="reveal-up"
                    />
                  ))
                  }
                </div>

            </div>
        </section>
    )
}

export default Skill

