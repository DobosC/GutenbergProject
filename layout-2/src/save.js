import {useBlockProps, RichText} from '@wordpress/block-editor';
import './style.scss'
import classnames from "classnames";

export default function save(props) {
	const {
		attributes: {
			title, subtitle, newURL, textbutton, textColor, heroImage
			, fullWidth, fontSizeTitle, fontSizeSubtitle, tagnameTitle, tagnameSubtitle, alignContent,listID
		}
	} = props;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>''
			<section id={listID} className="layout-2" style={{
				backgroundImage: `url(${heroImage})`, backgroundRepeat: `no-repeat`,
				backgroundPosition: `center`, backgroundSize: `cover`
			}}>
				<div className={classnames(
					{' container-fluid': fullWidth},
					{' container': !fullWidth}
				)} >
					<div className={alignContent}>
						<RichText.Content
							className="title"
							tagName={tagnameTitle}
							value={title}
							style={{color: textColor, fontSize: fontSizeTitle}}
						/>
						<RichText.Content
							className="subtitle pwidth"
							tagName={tagnameSubtitle}
							value={subtitle}
							style={{color: textColor, fontSize: fontSizeSubtitle}}
						/>


						<a href={newURL} className="btn-layout" target="_blank" rel="noopener noreferrer">
							<RichText.Content
								tagName="span"
								value={textbutton}
							/>

						</a>
					</div>
				</div>
			</section>
		</div>

	);
};

