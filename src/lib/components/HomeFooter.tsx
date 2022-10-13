import { RoutePath } from 'lib/config'
import { Dictionary } from 'lib/types'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { ChangeLanguages } from './ChangeLanguages'

type FooterProps = {
	T: Dictionary
}

export const HomeFooter: React.FunctionComponent<FooterProps> = ({ T }) => {
	const { footer } = T
	const { links } = footer

	const {
		buyGiftCard,
		contactUs,
		cookiePreferences,
		corporateInfo,
		faq,
		account,
		helpCenter,
		legalGuarantee,
		legalNotices,
		mediaCenter,
		privacy,
		redeemGiftCard,
		speedTest,
		termsOfUse,
		waysToWatch,
		jobs,
		onlyOnNetflix,
		investor,
	} = RoutePath

	const listItem = [
		{
			path: faq,
			text: links.faq,
		},
		{
			path: investor,
			text: links.investor,
		},
		{
			path: waysToWatch,
			text: links.waysToWatch,
		},
		{
			path: corporateInfo,
			text: links.corporate,
		},
		{
			path: legalNotices,
			text: links.legalNotices,
		},
		{
			path: helpCenter,
			text: links.helpCetner,
		},
		{
			path: jobs,
			text: links.jobs,
		},
		{
			path: termsOfUse,
			text: links.termsOfUse,
		},
		{
			path: contactUs,
			text: links.contactUs,
		},
		{
			path: onlyOnNetflix,
			text: links.onlyOnNetfilx,
		},
		{
			path: account,
			text: links.accout,
		},
		{
			path: redeemGiftCard,
			text: links.reedemGift,
		},
		{
			path: privacy,
			text: links.privacy,
		},
		{
			path: speedTest,
			text: links.speedTest,
		},
		{
			path: mediaCenter,
			text: links.mediaCenter,
		},
		{
			path: buyGiftCard,
			text: links.buyGiftCards,
		},
		{
			path: cookiePreferences,
			text: links.cookiePreferences,
		},
		{
			path: legalGuarantee,
			text: links.legalGuarantees,
		},
	]

	const linkFooter = listItem.map((item, index) => (
		<ListItem key={index}>
			<ItemLink to={item.path}>{item.text}</ItemLink>
		</ListItem>
	))

	return (
		<FooterContainer>
			<Footer>
				<Question>{T.footer.question}</Question>
				<List>{linkFooter}</List>
				<ChangeLanguages registration />
				<FooterBox>{footer.clon}</FooterBox>
			</Footer>
		</FooterContainer>
	)
}

const FooterContainer = styled.div`
	background-color: ${({ theme }) => theme.homePage.colors.background};

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
	}
`
const Footer = styled.div`
	color: #737373;
	padding: 30px;
	row-gap: 40px;
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		max-width: 1000px;
		margin: auto;
	}
`

const Question = styled.p`
	text-align: left;
	font-size: 16px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 18px;
	}
`
const List = styled.ul`
	list-style: none;
	font-size: 12px;
	margin-bottom: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 13px;
		align-items: flex-start;
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		row-gap: 20px;
		column-gap: 15px;
		max-height: 200px;
	}
`
const ListItem = styled.li`
	width: 50%;
	display: inline-block;
	margin-bottom: 16px;
	min-width: 100px;
	padding-right: 15px;
	vertical-align: top;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 25%;
	}
`
const FooterBox = styled.div`
	font-size: 12px;
	margin-top: 20px;
`

const ItemLink = styled(Link)`
	color: #757575;

	:hover {
		color: #757575;
		text-decoration: underline;
	}
`
