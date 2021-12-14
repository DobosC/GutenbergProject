import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType( 'create-block/layout-1', {

	edit: Edit,
	save,
} );
