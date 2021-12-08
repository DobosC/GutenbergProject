import {useBlockProps, RichText} from '@wordpress/block-editor';
import './style.scss'
import classnames from "classnames";

export default function save(props) {
	const {
		attributes: {title, subtitle, newURL, mediaURL, textbutton, textColor,
			backgroundColor,fullWidth,reverseColumns,fontSizeTitle,fontSizeSubtitle,tagnameTitle,tagnameSubtitle}
	} = props;
	const blockProps = useBlockProps.save();

	return (
		<div {...blockProps}>
			<section className="header" style={{backgroundColor: backgroundColor}}>
				<div className={classnames(
					{'container-fluid': fullWidth},
					{'container': !fullWidth}
				)}>
					<div className={classnames(
						{'row d-flex align-items-center flex-row-reverse': reverseColumns},
						{'row d-flex align-items-center': !reverseColumns}
					)}>
						<div className="col-md-5 d-flex flex-column ">
								<RichText.Content
									className="title"
									tagName={tagnameTitle}
									value={title}
									style={{color: textColor,fontSize:fontSizeTitle}}
								/>
								<RichText.Content
									className="subtitle"
									tagName={tagnameSubtitle}
									value={subtitle}
									style={{color: textColor,fontSize:fontSizeSubtitle}}
								/>


							<a href={newURL} className="btn-layout" target="_blank" rel="noopener noreferrer">
									<RichText.Content
										tagName="span"
										value={textbutton}
									/>

							</a>
						</div>
						<div className="col-md-7 d-flex justify-content-end align-items-end">
							{mediaURL && (
								<img
									src={mediaURL}
									className="img-fluid d-md-block d-none"
									alt="images"
								/>
							)}
						</div>
					</div>
				</div>
			</section>
		</div>

	);
};

