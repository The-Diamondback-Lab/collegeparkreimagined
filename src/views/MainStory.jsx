//react imports
import * as React from 'react';

//components
import Navigation from '../components/Navigation.jsx';
import Gallery from '../components/Gallery.jsx';

//images
//import cpovertime from '../assets/img/cpovertime.gif';
import diversity from '../assets/img/diversity.jpg';
import committee from '../assets/img/committee.jpg';

export default class MainStory extends React.Component {
  render() {
    return (
      <section id="mainstory">
        <Navigation />
        <div className="wrapper" id="mainstory-wrapper">
          <h1 className="first-line">
            Drafted in 2011, the University District Vision 2020 aims to shape
            College Park into a top 20 college town by 2020. Two years before
            that deadline, how close are they?
          </h1>
          <p>
            University of Maryland student Jocelyn Nolasco grew up in
            Hyattsville, graduating from Parkdale High School in 2015. She’s
            long criticized the lack of cohesion between her city and the nearby
            university.
            <br /> <br />
            “You don’t have to go five minutes down the road to see what’s been
            forgotten,” the junior government and politics major said. “People
            barely remember that there’s a high school down the street.”
            <br /> <br />
            But Nolasco, a current College Park resident, has recently noticed a
            marked difference in the relationship between the state’s flagship
            university and the surrounding municipalities — and it gives her
            hope. For instance, the university’s commitment to bettering the
            local education system has made seem like less of a “bubble,” she
            said.
            <br /> <br />
            “I care about the development,” she said. “This is a resource people
            need.”
            <br /> <br />
            The College Park City-University Partnership is a nonprofit
            organization working toward this end by pooling resources from the
            government, the private sector and the university. The group plans,
            carries out and offers support to initiatives aimed at making
            College Park more livable for all 12 months of the year, as it hopes
            to attract more university faculty members to live in the city with
            their families. This goes beyond just construction — the group
            focuses on a range of factors that impact College Park residents,
            from infrastructure to education to transportation.
            <br /> <br />
            Partnership leaders commonly cite a slew of achievements from the
            past few years. These include a commitment from the state and
            federal governments to fully fund the Purple Line, a light rail that
            will run through this university’s campus and connect New Carrollton
            and Bethesda; the establishment of a homeownership program that
            provides zero-interest, deferred-payment, forgivable loans to some
            city and university employees who live within the city’s boundaries;
            the creation of College Park Academy, a blended-learning college
            preparatory middle and high school that allows students to
            accumulate up to 25 credits for this university; the opening of
            MilkBoy ArtHouse, a joint restaurant and live music venue; the
            expansion of University Police jurisdiction; the certification of
            College Park as a Maryland Sustainable Community; and the
            implementation of new bike-sharing stations.
            <br /> <br />
            Five individual committees — specializing in housing and
            redevelopment, transportation, public safety, education and
            sustainability — help create and guide annual work plans, which are
            submitted to the partnership’s board of directors for approval. The
            committees hold meetings at least twice a year, and usually more
            often, depending on how much work they need to get done. The
            committees physically bring together elected officials, university
            administrators, state delegates and other local stakeholders.
            <br />
            <img
              src={diversity}
              alt="the board is comprised of all white men and one black woman"
            />
            <br />
            The committees physically bring together local College Park
            stakeholders -- including elected officials, university
            administrators and state delegates -- who otherwise might not
            congregate voluntarily. Each committee contains at least one
            committee chair (such as the mayor, a state delegate, or a former
            mayor), one partnership board member (often an experienced lawmaker
            or consultant), two city council members, two university
            administrators, at least one county council member, and one state
            legislator.
            <br /> <br />
            The committees do not implement changes; they lack individual
            budgets and the authority to distribute funds, levy taxes or
            allocate resources as desired. Rather, committees join forces to
            help advise, execute and oversee different projects.
            <br /> <br />
            “The biggest thing is that it’s a collaboration, and we are working
            together, productively, and with a concrete vision to achieve these
            goals of making College Park an even greater college town,” said
            Eric Olson, the partnership’s executive director. “That’s how things
            get done, when we work collaboratively.”
            <br /> <br />
            Much of the original work plan stems from a blueprint that Omar
            Blaik, the CEO and co-founder of consulting firm U3 Advisors, helped
            design. Blaik said he examined other cities with major universities
            — such as Ann Arbor, Michigan, and Philadelphia, Pennsylvania — and
            found they differed from College Park in several ways.
            <br /> <br />
            “Here, there was a lack of diversity in housing types, limited
            employment options, less density, less retail and amenities, less
            businesses that congregate around the campus,” Blaik said. “The
            university had grown in size and in caliber over time, but the city
            never caught up.”
            <br /> <br />
            Leaders of the partnership attribute much of the area’s rapid growth
            and revitalization in the years since to the appointment of
            University of Maryland President Wallace D. Loh, who assumed the
            role in 2010.
            <br /> <br />
            Maryland Sen. James Rosapepe (D-Prince George’s & Anne Arundel),
            chair of the partnership’s board of directors, said Loh’s support of
            the collaboration and Vision 2020 has led to “unprecedented”
            momentum. Though Rosapepe’s constituents in College Park have
            supported moving in this direction for decades, he said growth
            stunted under Loh’s predecessors.
            <br /> <br />
            “The challenge was that, before, the university was focused on the
            university,” Rosapepe said. Now, under Loh, who Rosapepe said “has
            been a real hero on this,” the area has made progress in terms of
            solidifying the relationship between the two entities.
          </p>
          <Gallery />
          <p>
            “The relationships were almost nonexistent before I came here,” Loh
            said. “What I learned is … you always make decisions not only to
            solve the problem right now, but you think about its implication 20
            to 30 years down the line.”
            <br /> <br />
            Critics of the partnership pose that the lack of student and
            permanent resident presence on the board and committees has excluded
            those voices from the conversation, often to their detriment. Twice
            in the past year, The Diamondback’s editorial board has taken the
            city council to task for its City Hall expansion plans, which would
            “take a chunk out of Route 1.” At a public hearing last fall,
            several residents spoke out against those expansion plans, with one
            deeming them a “vanity project.”
            <br /> <br />
            Nolasco said Hyattsville, home to a newly constructed arts district,
            “used to be very black and brown” but has recently become less
            diverse.
            <br /> <br />
            “I’ve heard people say the rent is getting higher,” she said. “You
            see people moving out.” But Blaik said for a place like College
            Park, “gentrification is much more a perceived threat rather than an
            actual one.” In his previous role as a senior vice president at the
            University of Pennsylvania, Blaik helped lead a similar
            transformation in Philadelphia.
            <br /> <br />
            “The minority of housing in Old Town are owner-occupied,” he said.
            “Little displacement occurs because there’s a limited renter market
            for long-term residents.”
            <br /> <br />
            Loh acknowledged the “economic consequences” of redevelopment,
            noting that this university— together with leaders from Prince
            George’s and Montgomery county governments — signed a commitment to
            protect low-income communities and individuals from displacement and
            “getting priced out.” It promises to “identify and address the
            potential impacts of the [Purple Line] such as gentrification,
            displacement and loss of housing affordable to the community, while
            supporting benefits such as increased accessibility to transit.”
            <br /> <br />
            Former College Park Mayor Andrew Fellows said the agreement “commits
            to avoid displacement and gentrification in ways it typically
            happens.”
            <br /> <br />
            Carlo Colella, this university’s administration and finance vice
            president, said the partnership’s leadership actively works to
            safeguard the interests of students and current residents. “We’re
            bringing about amenities that are keeping residents here who would
            otherwise move,” Colella said. “We’re also redeveloping vacant
            property, so really, we’re adding to the housing offerings.”
            <br /> <br />
            Under the leadership of Ken Ulman, the University of Maryland
            College Park Foundation’s chief strategy officer for economic
            development, the collaboration is also slated to add hundreds of
            jobs to College Park’s Discovery District — a more than 150-acre
            area around The Hotel at the University of Maryland — starting in
            July. Ulman, the founder and CEO of consulting firm Margrave
            Strategies, said the new office space in the Discovery District will
            host “the kind of companies that want to collaborate with faculty
            and staff and want to hire our students as interns and then
            full-time employees.”
            <br />
            <br />
            Parris Glendening, Maryland’s governor when the partnership was
            created, said the university “would not have survived” had it not
            embraced change.
            “They’re studying us and trying to figure out how we are doing it,”
            he said. “I think our little university becoming a national model is
            pretty exciting.”
            <br />
            <br />
            But meanwhile, some longtime residents have expressed fear that
            College Park’s historic quaintness will evolve into a louder,
            busier, more congested area that does not reflect their lifestyles.
            And several students have voiced concerns, saying the university has
            neglected matters of student life — such as parking, housing and the
            surrounding food desert — as it prioritizes redevelopment.
            <br /> <br />
            “I don’t see the student voice represented there,” AJ Pruitt, the
            2017-18 SGA president, said about the partnership. Although he
            believes College Park “is better off” with the partnership in place,
            he said the focus on recruiting young professionals and university
            staffers to live in the city has come at a cost to students and
            residents.
            <br /> <br />
            “They say they’re helping students by developing, but I don’t think
            that can be true if you don’t fully incorporate students into the
            leadership,” said Pruitt, a senior economics and government and
            politics major.
            <br /> <br />
            And while the partnership has exceeded the expectations of many
            involved, leaders admit much of the work lies ahead.
            <br /> <br />
            “We always knew we weren’t creating the 2020 goal as something that
            would be done in 2020,” said Fellows, who helped draft the original
            University District Vision 2020 document. “It was designed to
            address the long-standing challenges of the divide [between the city
            and this university]. We’ve succeeded in that respect.”            <img
              src={committee}
              alt="Each committee contains at least one
                  committee chair (such as the mayor, a state delegate, or a former
                  mayor), one partnership board member (often an experienced lawmaker
                  or consultant), two city council members, two university
                  administrators, at least one county council member, and one state
                  legislator."
            />
          </p>
          
        </div>
      </section>
    );
  }
}
