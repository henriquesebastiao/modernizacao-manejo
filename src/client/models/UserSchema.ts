/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type UserSchema = {
	first_name: string;
	last_name: string;
	email: string;
	id: number | null;
	phone: string | null;
	create_at?: string | null;
	update_at?: string | null;
	user_type_id: number | null;
	manager_id: number | null;
	active?: boolean | null;
};
