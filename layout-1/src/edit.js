import {__} from '@wordpress/i18n';
import {
	RichText,
	useBlockProps,
	URLInputButton,
	MediaUpload,
	PanelColorSettings,
	InspectorControls
} from '@wordpress/block-editor';
import './editor.scss';
import {Button, FormToggle, PanelBody, PanelRow, RangeControl, SelectControl, TextControl} from '@wordpress/components';
import classnames from 'classnames';

export default function Edit(props) {
	const {
		attributes: {
			textbutton, title, subtitle, newURL, mediaURL, mediaID,
			backgroundColor, textColor, fullWidth, reverseColumns, fontSizeTitle, fontSizeSubtitle,
			tagnameTitle, tagnameSubtitle, alignContent,listID
		},
		setAttributes
	} = props;

	const blockProps = useBlockProps();

	const onSelectImage = (media) => {
		setAttributes({
			mediaURL: media.url,
			mediaID: media.id,
		});
	};
	const onChangeBackgroundColor = backgroundColor => {
		setAttributes({backgroundColor});
	};

	const onChangeTextColor = textColor => {
		setAttributes({textColor});
	};

	const onChangeTitle = title => {
		setAttributes({title});
	};
	const onChangeTextButton = textbutton => {
		setAttributes({textbutton});
	};


	const onChangeSubtitle = subtitle => {
		setAttributes({subtitle});
	};

	const onChangeAppURL = newURL => {
		setAttributes({newURL});
	};

	return (
		<>
			<InspectorControls>
				<PanelBody>
					<PanelRow>
						<TextControl
							label="set ID"
							value={listID}
							onChange={(listID) => {
								setAttributes({listID})
							}}
						/>
					</PanelRow>
				</PanelBody>

				<PanelColorSettings
					title={__('Background', 'layout-1')}
					colorSettings={[
						{
							value: backgroundColor,
							onChange: onChangeBackgroundColor,
							label: __('Background Color', 'layout-1')
						}
					]}
				/>
				<PanelColorSettings
					title={__('Text', 'layout-1')}
					colorSettings={[
						{
							value: textColor,
							onChange: onChangeTextColor,
							label: __('Text Color', 'layout-1')
						}
					]}
				/>
				<PanelBody title={__('Layout Settings', 'layout-1')}>
					<PanelRow>
						<label htmlFor="layout-1-width-stoggle">
							{__('Full Width', 'layout-1')}
						</label>
						<FormToggle id='layout-1-width-toggle'
									checked={fullWidth}
									onClick={() => {
										setAttributes({fullWidth: !fullWidth})
									}}
						/>
					</PanelRow>
					<PanelRow>
						<label htmlFor="layout-1-reverse-stoggle">
							{__('Reverse Columns', 'layout-1')}
						</label>
						<FormToggle id='layout-1-reverse-toggle'
									checked={reverseColumns}
									onClick={() => {
										setAttributes({reverseColumns: !reverseColumns})
									}}
						/>
					</PanelRow>
					<PanelRow>
						<label htmlFor="layout-1-alignment">
							{__('Align Content', 'layout-1')}
						</label>
						<SelectControl
							value={alignContent}
							options={[
								{label: 'Left', value: 'col-md-5 d-flex flex-column align-items-start'},
								{label: 'Center', value: 'col-md-5  d-flex flex-column align-items-center'},
								{label: 'Right', value: 'col-md-5  d-flex flex-column align-items-end'},
							]}
							onChange={(value) => {
								setAttributes({alignContent: value})
							}}
						/>

					</PanelRow>
				</PanelBody>

				<PanelBody title={__('Tipography', 'layout-1')}>
					<RangeControl
						label={"Font Size Title"}
						allowReset={"true"}
						value={fontSizeTitle}
						onChange={(fontSizeTitle) => {
							setAttributes({fontSizeTitle})
						}}
						min={60}
						max={120}
					/>
					<RangeControl
						label={"Font Size Subtile"}
						value={fontSizeSubtitle}
						allowReset={"true"}
						onChange={(fontSizeSubtitle) => {
							setAttributes({fontSizeSubtitle})
						}}
						min={15}
						max={45}
					/>
					<SelectControl
						label="Headings Title"
						value={tagnameTitle}
						options={[
							{label: 'Paragraph', value: 'p'},
							{label: 'H1', value: 'h1'},
							{label: 'H2', value: 'h2'},
							{label: 'H3', value: 'h3'},
							{label: 'H4', value: 'h4'},
							{label: 'H5', value: 'h5'},
							{label: 'H6', value: 'h6'},
						]}
						onChange={(value) => {
							setAttributes({tagnameTitle: value})
						}}
					/>
					<SelectControl
						label="Headings Subtitle"
						value={tagnameSubtitle}
						options={[
							{label: 'Paragraph', value: 'p'},
							{label: 'H1', value: 'h1'},
							{label: 'H2', value: 'h2'},
							{label: 'H3', value: 'h3'},
							{label: 'H4', value: 'h4'},
							{label: 'H5', value: 'h5'},
							{label: 'H6', value: 'h6'},
						]}
						onChange={(value) => {
							setAttributes({tagnameSubtitle: value})
						}}
					/>
				</PanelBody>
			</InspectorControls>
			<div {...blockProps}>
				<section id={listID} className="header" style={{backgroundColor: backgroundColor}}>
					<div className={classnames(
						{'container': !fullWidth},
						{'container-fluid': fullWidth}
					)}>
						<div className={classnames(
							{'row d-flex flex-row-reverse': reverseColumns},
							{'row d-flex': !reverseColumns}
						)}>

							<div className={alignContent}>

								<RichText
									onChange={onChangeTitle}
									value={title}
									placeholder={__("Title", "layout-1")}
									style={{color: textColor, fontSize: fontSizeTitle / 2}}
									tagName={tagnameTitle}
								/>
								<RichText
									onChange={onChangeSubtitle}
									value={subtitle}
									placeholder={__("Subtitle", "layout-1")}
									style={{color: textColor, fontSize: fontSizeSubtitle}}
									tagName={tagnameSubtitle}
								/>


								<div className="d-flex align-items-center">
									<a href={newURL} className="btn-layout" target="_blank" rel="noopener noreferrer">
								<span>
									<RichText
										onChange={onChangeTextButton}
										value={textbutton}
										placeholder={__("Text Button", "layout-1")}
									/>
								</span>
									</a>
									<URLInputButton
										onChange={onChangeAppURL}
										url={newURL}
									/>
								</div>
							</div>

							<div className="bird-image col-md-7">
								<MediaUpload
									onSelect={onSelectImage}
									allowedTypes="image"
									value={mediaID}
									render={({open}) => (
										<Button
											className={
												mediaID ? 'image-button' : 'button button-large'
											}
											onClick={open}
										>
											{!mediaID ? (
												__('Upload Image', 'layout-1')
											) : (
												<img
													src={mediaURL}
													alt={__(
														'Upload Recipe Image',
														'layout-1'
													)}
												/>
											)}
										</Button>
									)}
								/>
							</div>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}


