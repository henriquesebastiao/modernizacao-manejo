/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSchema = {
	id?: number;
	first_name?: string;
	last_name?: string;
	phone?: string;
	email: string;
	password: string;
	create_at?: string;
	update_at?: string;
	user_type_id?: number;
	manager_id?: number;
	active?: boolean;
};
