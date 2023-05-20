import Icon from "../../atoms/Icon/Icon";

interface LogoProps {
	style?: React.CSSProperties;
	classNames?: string;
}

const Logo: React.FC<LogoProps> = ({ style, classNames }) => {
	return (
		<div className={classNames && classNames} style={style && style}>
			<Icon icon="logo1" height={91} width={195} />
		</div>
	);
};

export default Logo;
