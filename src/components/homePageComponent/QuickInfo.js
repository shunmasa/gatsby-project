import React, { Component } from "react"
import { Section, Title, SectionButton } from "../../components/utils"
import styled from "styled-components"
import { Link } from "gatsby"
import { styles } from "../../components/utils"
export default class QuickInfo extends Component {
  render() {
    return (
      <Section>
        <Title message="let us tell you " title="our mission"></Title>
        <QuickInfoWrapper>
          <p className="text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
            veniam corporis enim dignissimos commodi, sequi soluta doloremque
            modi, pariatur consequatur possimus iste deserunt dicta expedita cum
            dolor architecto doloribus. Optio atque accusamus velit distinctio
            repellendus maiores, aut placeat tenetur veniam temporibus? Autem,
            eveniet odit saepe suscipit nam corporis quaerat iste.
          </p>
          <Link to="/about/" style={{ textDecoration: "none" }}>
            <SectionButton style={{ margin: "2rem auto" }}>about</SectionButton>
          </Link>
        </QuickInfoWrapper>
      </Section>
    )
  }
}

const QuickInfoWrapper = styled.div`
  width: 90%;
  margin: 2rem auto;
  .text {
    line-height: 2rem;
    color: ${styles.colors.mainGrey};
    word-spacing: 0.2rem;
  }

  @media (min-width: 768px) {
    width: 70%;
  }
  @media (min-width: 992px) {
    width: 60%;
  }
`
