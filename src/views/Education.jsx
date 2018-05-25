//react imports
import * as React from 'react';

//components
import LeadImage from '../components/LeadImage.jsx';

//images
import education from '../assets/img/sections/education.jpeg'

const Education = () => {
  return (
    <section className="section" id="education">
      <div className="wrapper" id="education-wrapper">

        <LeadImage image={education} text={'College Park Academy opened in 2013. Its first senior class will graduate in 2019. (Photo by Tom Hausman/The Diamondback)'} />

        <h1>EDUCATION</h1>
        <h3 className="first-line">
          When Wallace Loh became the University of Maryland’s president in 2010, he knew — in his words — “zip, zero” about K-12 education or revitalizing an area. But he quickly learned that the two went hand-in-hand.
        </h3>
        <p>
          After his first meeting with U3 Advisors CEO Omar Blaik, Loh realized the university would attract more families and professionals to the area if it worked to make the local schools more competitive relative to the rest of the state. As a first step, this university — in collaboration with the city of College Park — created the College Park Academy, a blended-learning middle and high school designed to prepare students for college. The academy enrolls students based on a highly competitive lottery system.
          <br />
          <br />
          Executive director Bernadette Ortiz-Brewster said many variables have contributed to the academy’s growth and success since it opened in 2013.
          <br />
          <br />
          “One of the most exciting parts is that [University of Maryland]
          students come in and propose their own courses and programs,” she
          said. In that way, “it’s a different curriculum than what else is
          being offered.”
          <br />
          <br />
          But critics have voiced the need for additional competitive schooling
          options, noting that the lack of programs like College Park Academy
          drive them away from College Park.
          <br />
          <br />
          “As somebody with a one year old, it is difficult to find, when you
          compare yourself to other, large state schools.” said resident Mark
          Fuge. “I can usually convince [potential homebuyers] of all the other
          things, but it always comes back down to, yeah but the public schools
          in Montgomery County or Howard County are better.”
        </p>


        <h3 className="list-heading">
          Accomplishments to Date
        </h3>

        <p className="p-heading">
          UMD Partnership with Paint Branch Elementary School provided the first Chinese language instruction for elementary students in Prince George’s County
        </p>
        <p className="descrip">
          According to state Sen. James Rosapepe (D-Prince George’s & Anne Arundel), this university is interested in supporting and promoting dual immersion curricula in local schools, especially Chinese and Spanish language.
          <br /> <br />
          The 2012-13 academic year annual report summary states that the UMD-Paint Branch Elementary School partnership “expos[es] Paint Branch students to the opportunities and expertise of the university, a broader global perspective, and 21st century life and business skills relevant for building a successful future.”
        </p>

        <p className="p-heading">
          College Park Academy, a university-supported charter school, opened in 2013 and moved into a new building in the Discovery District in fall 2017.
        </p>
        <p className="descrip">
          According to the Prince George’s County Public Schools website, the academy has produced some of the top test scores in all of Maryland, outperforming not just the county and state but also Howard and Montgomery County Schools in some areas. Next year, the academy will graduate its first senior class.
          <br /> <br />
          Loh attributes the school’s success to “the huge numbers of University of Maryland students who go and tutor and mentor them.” He also noted schools from across Prince George’s County have expressed interest in replicating portions of the College Park Academy model.
          <br /><br />
          “And that’s one of the things we’re exploring,” Loh said. “In fact, we’re having a conversation with an organization to take College Park Academy to other parts of the state.”
          <br /><br />
          While the lottery for the academy is open to all county residents, those who live in the area will get a leg up in their application. Thirty-five percent of the spots in this fall’s sixth-grade class are reserved for students from six local elementary schools — Berwyn Heights, Cherokee Lane, Hollywood, Paint Branch, Riverdale and University Park. Eric Olson, the partnership’s executive director, said this should provide assurance to local families while applying to the academy.
          <br /><br />
          Additionally, applicants have an advantage in the lottery process if their siblings have continuously attended the academy. Olson said the “new sibling preference” usually works to enroll siblings of current students, helping parents feel more assured with the lottery system.
          <br /><br />
          Next year, the College Park Academy will enroll up to 675 students, Ortiz-Brewster said. She added that about 1,675 children are on the waitlist.
          <br /><br />
          Promoting the expanded boundary area is included on the partnership’s 2018 work plan.
        </p>

        <p className="p-heading">
          New childcare and Pre-K coming to College Park. UMD-backed daycare is set to move into the Calvert Road School site. Another provider is locating in North College Park.
        </p>
        <p className="descrip">
          The university-run Center for Young Children can enroll up to 110 children, but it prioritizes those whose parents work or study at the university. To address resident needs, two new programs for young children are expected to launch in 2019, Olson said.
          <br /> <br />
          A daycare center will be placed a few blocks from City Hall in the former elementary school on Calvert Road. The Diamondback reported in April 2017 that it’ll have 120 spots and be geared toward children as old as 5 and as young as 6 weeks.
          <br /><br />
          Additionally, the College Park Early Learning Center — intended for 3- to 5-year-olds — is slated to open on Rhode Island Avenue in North College Park. $250,000 in state funding has been requested for the project.
        </p>

        <p className="p-heading">
          K-12 schools survey completed
        </p>
        <p className="descrip">
          The survey examined what local parents want out of Prince George’s County Public Schools, Olson said. The results — which are still being compiled — will be used to help inform lawmakers and policymakers, he said.
          <br /> <br />
          Loh said a systemic transformation of the local school system will “take years and years” to accomplish, but additions like College Park Academy are “a reason why we’re seeing an uptick in faculty and staff living here.”
          <br /><br />
          The partnership will implement strategies based on the survey and present data to lawmakers, according to the 2018 work plan. Leaders will also “catalog, package and promote local College Park schools” by creating a brochure and a “one-stop shop” webpage for interested parents.
        </p>

        <h3 className="list-heading">
          Highlights of the Education 2018 Work Plan
        </h3>

        <p className="p-heading">
          Explore a K-5 school
        </p>
        <p className="descrip">
          According to Olson, “it’s definitely something that’s being looked into” but will not happen immediately. There is no estimated opening date.
        </p>

        <p className="p-heading">
          Before- and after-school programs
        </p>
        <p className="descrip">
          Olson said while there are no formal plans for this venture or an estimation of its monetary value, he hopes to solidify the logistics soon. He said these programs will hopefully involve “learning in a fun way” and allow students with space and assistance to do homework, as well as offer other “creative things” such as art, drama and music.
        </p>

      </div>
    </section>
  );
};

export default Education;
