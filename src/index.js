import { registerBlockType } from '@wordpress/blocks';
import './style.scss';

import Edit from './edit';
import save from './save';

registerBlockType('button/bytesco-button', {
	/**
	 * @see ./edit.js
	 */
	edit: Edit,

	/**
	 * @see ./save.js
	 */
	save,
});
