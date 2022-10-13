import { RoutePath } from 'lib/config'
import { Dictionary } from 'lib/types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ChangeLanguages } from './ChangeLanguages'

type RegistrationHeaderProps = {
	T: Dictionary
}

export const RegistrationFooter: React.FunctionComponent<
	RegistrationHeaderProps
> = ({ T }) => {
	const { footer } = T
	const { links } = footer

    const {
      cookiePreferences,
      corporateInfo,
      faq,
      helpCenter,
      privacy,
      termsOfUse,
    } = RoutePath
  
    const listItem = [
      {
        path: faq,
        text: links.faq,
      },
      {
        path: corporateInfo,
        text: links.corporate,
      },
      {
        path: helpCenter,
        text: links.helpCetner,
      },
      {
        path: termsOfUse,
        text: links.termsOfUse,
      },
      {
        path: privacy,
        text: links.privacy,
      },
      {
        path: cookiePreferences,
        text: links.cookiePreferences,
      },
    ]

    const linkFooter = listItem.map((item, index) => (
      <ListItem key={index}>
        <ItemLink to={item.path}>{item.text}</ItemLink>
      </ListItem>
    ))
  
    return (
      <Footer>
        <Questions>{T.footer.question}</Questions>
        <FooterList>
          <List>{linkFooter}</List>
          <ChangeLanguages  />
        </FooterList>
        <FooterBox>{Footer.clon}</FooterBox>
      </Footer>
    )
	
}

const Footer = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) =>
		theme.createAccount.colors.backgroundFooter};
	color: ${({ theme }) => theme.createAccount.colors.footerTypography};
	padding: 30px;
	row-gap: 40px;
	width: 100%;
  border-top: 1px solid #333;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		padding: 60px;
	}
`
const Questions = styled.div`
	text-align: left;
	font-size: 18px;
`
const FooterList = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: column;
	width: 100%;
	row-gap: 30px;
`
const List = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: column;
	flex-wrap: wrap;
	row-gap: 20px;
	column-gap: 10px;
	font-size: 14px;
	width: 100%;
	max-height: 100px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		max-height: 80px;
	}
	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		display: block;
	}
`
const ListItem = styled.li`
	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		padding-bottom: 20px;
		display: inline-block;
		width: 25%;
	}
`
const FooterBox = styled.div``

const ItemLink = styled(Link)`
	color: #757575;

	:hover {
		color: #757575;
		text-decoration: underline;
	}
`
