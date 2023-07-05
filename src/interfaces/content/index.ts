import { StudioInterface } from 'interfaces/studio';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface ContentInterface {
  id?: string;
  title: string;
  description?: string;
  image?: string;
  studio_id?: string;
  user_id?: string;
  created_at?: any;
  updated_at?: any;

  studio?: StudioInterface;
  user?: UserInterface;
  _count?: {};
}

export interface ContentGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  description?: string;
  image?: string;
  studio_id?: string;
  user_id?: string;
}
