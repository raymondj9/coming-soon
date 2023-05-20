import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import facebook from "../../../assets/socials/facebook.svg"
import linkedin from "../../../assets/socials/linkedin.svg"
import twitter from "../../../assets/socials/twitter.svg"

const Footer = () => {
	const isMobile = useMediaQuery({
		query: "(max-width: 640px)",
	});

	return (	
		<StyledFooter>
			<div className="flex justify-center !mt-4 gap-x-8">
				<a href="http://www.facebook.com/fragvest" target={'_blank'}>
					<img src={facebook}/>
				</a>
				<a href="#" className="mx-3" target={'_blank'}>
					<img src={linkedin}/>
				</a>
				<a href="http://www.twitter.com/fragvest" target={'_blank'}>
					<img src={twitter}/>
				</a>
			</div>
		</StyledFooter>
	);
};

const StyledFooter = styled.footer`
	padding-bottom: 26px;

	@media screen and (max-width: 640px) {
		padding-bottom: 36px;
	}

	& > section {
		& > div {
			a,
			p {
				display: block;
				color: var(--text-color);
				font-size: 16px;
				white-space: nowrap;
				margin-bottom: 0.7rem;
				text-decoration: none;
			}

			a:hover {
				color: var(--color-primary);
				transition: all 0.7s;
			}
		}
	}
`;

export default Footer;
