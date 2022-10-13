import { Images } from 'assets'
import { Dictionary } from 'lib/types'
import styled from 'styled-components'

export type StoryCardProps = {
	T: Dictionary
}

export const StoryCards: React.FunctionComponent<StoryCardProps> = ({ T }) => {
	return (
		<StoryContainer>
			<CardContainer>
				<Card>
					<Text>
						<Title>{T.home.storyCards.tv.title}</Title>
						<SubTitle>{T.home.storyCards.tv.subTitle}</SubTitle>
					</Text>
					<AnimationContainer>
						<Animation>
							<Image src={Images.Tv} alt='tv' />
							<Video autoPlay playsInline muted loop>
								<source
									src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-0819.m4v'
									type='video/mp4'
								/>
							</Video>
						</Animation>
					</AnimationContainer>
				</Card>
			</CardContainer>
			<CardContainer>
				<Card>
					<Text>
						<Title>{T.home.storyCards.download.title}</Title>
						<SubTitle>{T.home.storyCards.download.subTitle}</SubTitle>
					</Text>
					<AnimationContainer>
						<Animation>
							<Mobile>
								<Image src={Images.Mobile} alt='mobile' />
								<Download>
									<ImageSTRANGER
										src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png'
										alt='Stranger Things-pics'
									/>
									<DownloadContainer>
										<BoxTitle>
											{T.home.storyCards.download.box.movieTitle}
										</BoxTitle>
										<BoxDownload>
											{T.home.storyCards.download.box.download}
										</BoxDownload>
									</DownloadContainer>
									<IconDownload />
								</Download>
							</Mobile>
						</Animation>
					</AnimationContainer>
				</Card>
			</CardContainer>
			<CardContainer>
				<Card>
					<Text>
						<Title>{T.home.storyCards.watchEverywhere.title}</Title>
						<SubTitle>{T.home.storyCards.watchEverywhere.subTitle}</SubTitle>
					</Text>
					<AnimationContainer>
						<Animation>
							<Pc>
								<Image src={Images.Pc} alt='pc' />
								<VideoPc autoPlay playsInline muted loop>
									<source
										src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices.m4v'
										type='video/mp4'
									/>
								</VideoPc>
							</Pc>
						</Animation>
					</AnimationContainer>
				</Card>
			</CardContainer>
			<CardContainer>
				<Card>
					<Text>
						<Title>{T.home.storyCards.kids.title}</Title>
						<SubTitle>{T.home.storyCards.kids.subTitle}</SubTitle>
					</Text>
					<Kids>
						<Image src={Images.KidsProfil} alt='kids' />
					</Kids>
				</Card>
			</CardContainer>
		</StoryContainer>
	)
}

const StoryContainer = styled.div`
	margin-top: -25px;
	border-top: 10px solid #222;
	background-color: ${({ theme }) => theme.homePage.colors.background};
	color: ${({ theme }) => theme.homePage.colors.typography};
`
const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: center;

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		flex-direction: row;
	}

	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		margin: auto;
		max-width: 1000px;
	}
`

const CardContainer = styled.div`
	border-bottom: 10px solid #1f1d1d;
	padding: 50px 5%;

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		padding: 50px 25px 50px 45px;
		flex-direction: row;

		:nth-child(2n + 2) {
			${Card} {
				flex-direction: row-reverse;
			}
		}
	}
`

const Text = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	width: 100%;

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		display: flex;
		flex-direction: column;
		text-align: left;
		align-items: flex-start;
		row-gap: 10px;
	}
`
const Title = styled.div`
	font-size: 26px;
	font-weight: 800;
	line-height: 55px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 40px;
		width: 85%;
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		font-size: 50px;
		width: 95%;
	}

	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		font-size: 30px;
		width: 75%;
	}
`
const SubTitle = styled.div`
	font-size: 18px;
	z-index: 2;
	line-height: 1.2;
	padding-bottom: 20px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 20px;
	}
	@media (min-width: ${({ theme }) => theme.media.md}px) {
		font-size: 26px;
		font-weight: 400;
		padding-top: 10px;
	}
	@media (min-width: ${({ theme }) => theme.media.lg}px) {
		font-size: 25px;
	}
`
const AnimationContainer = styled.div`
	width: 100%;
`
const Animation = styled.div`
	position: relative;
	top: -30px;
`
const Mobile = styled.div`
	position: relative;

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		left: -50px;
		width: 90%;
	}
`
const Image = styled.img`
	position: relative;
	width: 100%;
	z-index: 1;

	@media (min-width: ${({ theme }) => theme.media.md}px) {
	}
`
const Video = styled.video`
	position: absolute;
	height: 100%;
	width: 100%;
	max-width: 75%;
	max-height: 55%;
	left: 50%;
	top: 46%;
	transform: translate(-50%, -50%);

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		top: 47%;
	}
`
const Download = styled.div`
	width: max-content;
	height: 60px;
	position: absolute;
	bottom: 8%;
	left: 50%;
	transform: translateX(-50%);
	z-index: 1;
	border: 2px solid hsla(0, 0%, 100%, 0.25);
	border-radius: 10px;
	background-color: #000;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	box-shadow: 0 0 2em 0 #000;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 60%;
		height: 80px;
	}

	@media (min-width: ${({ theme }) => theme.media.md}px) {
		width: 60%;
		height: 90px;
	}
`
const ImageSTRANGER = styled.img`
	margin-left: 10px;
	height: 50px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		height: 65px;
	}
`

const DownloadContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	width: 100%;
	margin-left: 15px;
	row-gap: 2px;
`
const IconDownload = styled.div`
	justify-self: flex-end;
	background: url(https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/download-icon.gif)
		50% no-repeat;
	width: 100px;
	height: 50px;
	transform: scale(0.5);

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		margin-right: 0px;
	}
`
const BoxTitle = styled.div`
	font-size: 14px;
	font-weight: 600;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 16px;
	}
`
const BoxDownload = styled.div`
	font-size: 12px;
	color: #0071eb;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		font-size: 14px;
	}
`
const Pc = styled.div`
	padding-top: 10px;
`

const VideoPc = styled.video`
	position: absolute;
	height: 100%;
	width: 100%;
	max-width: 62%;
	max-height: 60%;
	left: 50%;
	top: 35%;
	transform: translate(-50%, -50%);
`
const Kids = styled.div`
	margin-top: 10px;

	@media (min-width: ${({ theme }) => theme.media.sm}px) {
		width: 80%;
	}
`
