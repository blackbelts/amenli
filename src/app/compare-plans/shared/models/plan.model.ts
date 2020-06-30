import { Category } from './category.model';
import { Feature } from './feature.model';

export interface PlanModel {
    title: string,
    type: Category,
    features: Feature
}