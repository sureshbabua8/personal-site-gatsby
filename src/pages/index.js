import React from 'react';

import Layout from '../components/Layout';

import Scroll from '../components/Scroll';

import me from '../assets/images/me.jpeg';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic4 from '../assets/images/pic04.jpg';
import config from '../../config';
const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading}</h2>
        <p>{config.subHeading}</p>
        <ul className="actions special">
          <li>
            <Scroll type="id" element="one">
              <a href="/#" className="button primary">
                Explore
              </a>
            </Scroll>
          </li>
        </ul>
      </div>
      <Scroll type="id" element="one">
        <a href="#one" className="more">
          Learn More
        </a>
      </Scroll>
    </section>

    <section id="one" className="wrapper style1 special">
      <div className="inner">
      <div className="image">
          <img src={me} alt="" />
        </div>
        <header className="major">
          <h2>
            Hi! My name's Amirtha.
          <br/>
          </h2>
          <p>
          I'm a rising junior at the University of Illinois Urbana Champaign, studying math, computer science, and statistics.  
          I'm passionate about serving the community, learning new skills, and working on various open source projects.  
            <br />
            <br />
          I'm experienced in backend and Android development, and currently honing in on my front-end skills!  
          I love algorithms and all forms of theoretical computer science; 
          I hope to continue expanding my expertise in these fields and finding new ways to apply my knowledge into my work.
            
          </p>
        </header>
        {/* <ul className="icons major">
          <li>
            <span className="icon fa-gem major style1">
              <span className="label">Lorem</span>
            </span>
          </li>
          <li>
            <span className="icon fa-heart major style2">
              <span className="label">Ipsum</span>
            </span>
          </li>
          <li>
            <span className="icon solid fa-code major style3">
              <span className="label">Dolor</span>
            </span>
          </li>
        </ul> */}
      </div>
    </section>
    <section id="two" className="wrapper style4 special">
    <header className="inner">
          <h2>Work Experience</h2>
          {/* <p>
            Aliquam ut ex ut augue consectetur interdum. Donec amet imperdiet
            eleifend
            <br />
            fringilla tincidunt. Nullam dui leo Aenean mi ligula, rhoncus
            ullamcorper.
          </p> */}
        </header>
    </section>
    <section id="two" className="wrapper alt style2">
    
      <section className="spotlight">
        <div className="image">
          <img src={pic1} alt="" />
        </div>
        <div className="content">
          <h2>
            Technical Skills
            {/* <br /> */}
          </h2>
          <ul className="alt">
								<li>Backend development</li>
								<li>Android mobile development</li>
								<li>Web development</li>
							</ul>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic2} alt="" />
        </div>
        <div className="content">
          <h2>
            Capital One
          </h2>
          <header>
						<h4>Software Engineering Intern</h4>
						<p>Jun 2020 - Aug 2020</p>
            {/* <br/> */}
            <ul>
								<li>Deploy client-agnostic REST API to automate total loss process</li>
								<li>Develop AWS Textract proof-of-concept as model for OCR pipeline</li>
								<li>Improve efficiency of total loss title release by 50 percent, cost by 74%</li>
							</ul>
					</header>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic3} alt="" />
        </div>
        <div className="content">
          <h2>
            Department of Computer Science
          </h2>
          <header>
						<h4>Head Course Assistant (Paid)</h4>
						<p>Jan 2020 - Present</p>
            {/* <br/> */}
            <ul>
								<li>Developing full-stack Android machine project for Fall 2020 students</li>
								<li>Testing app development with JUnit, ShadowMocker, and Roboelectric</li>
								<li>Currently writing documentation to guide semester-long progress</li>
							</ul>
					</header>
        </div>
      </section>
      <section className="spotlight">
        <div className="image">
          <img src={pic4} alt="" />
        </div>
        <div className="content">
          <h2>
            Summer Intern
          </h2>
          <header>
						<h4>Walmart</h4>
						<p>Jun 2019 - Aug 2019</p>
            {/* <br/> */}
            <ul>
								<li>Analyzed and summarized gaps within ESG metrics reporting</li>
								<li>Created flow process models using PM and product management ideologies</li>
							</ul>
					</header>
        </div>
      </section>
    </section>
    <section id="two" className="wrapper style4 special">
    <header className="inner">
          <h2>Projects and Involvement</h2>
        </header>
    </section>
    <section id="three" className="wrapper style3 special">
    <header className="inner">
          <h2>Projects</h2>
        </header>
      <div className="inner">
        <ul className="features">
          <li>
          <header>
            <h3>CS@Illinois Community</h3>
            <p>Jun 2020 - Present</p>
          </header>
          <p>Static website powered by Gatsby and ReactJS, querying data using GraphQL</p>
          </li>
          <li>
          <header>
            <h3>Course Explorer</h3>
            <p>Jun 2020 - Present</p>
          </header>
            <p>
            Android app that allows students to search and rate courses,
            built and Dockerized REST API to access coursess
            </p>
          </li>
          <li>
            <h3>Mus Scelerisque</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon solid fa-headphones-alt">
            <h3>Mauris Imperdiet</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-heart">
            <h3>Aenean Primis</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
          <li className="icon fa-flag">
            <h3>Tortor Ut</h3>
            <p>
              Augue consectetur sed interdum imperdiet et ipsum. Mauris lorem
              tincidunt nullam amet leo Aenean ligula consequat consequat.
            </p>
          </li>
        </ul>
      </div>
    </section>

    <section id="cta" className="wrapper style4">
      <div className="inner">
        <header>
          <h2>Arcue ut vel commodo</h2>
          <p>
            Aliquam ut ex ut augue consectetur interdum endrerit imperdiet amet
            eleifend fringilla.
          </p>
        </header>
        <ul className="actions stacked">
          <li>
            <a href="/#" className="button fit primary">
              Activate
            </a>
          </li>
          <li>
            <a href="/#" className="button fit">
              Learn More
            </a>
          </li>
        </ul>
      </div>
    </section>
  </Layout>
);

export default IndexPage;
