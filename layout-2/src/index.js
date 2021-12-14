
import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';
import save from './save';

registerBlockType( 'create-block/layout-2', {
	edit: Edit,
	save,
} );
