import CategoryLayout from '../../components/layout/CategoryLayout';
import { TarotCategoryData } from '../../data/Tarot/tarotContents';

export default function Tarot() {
  return <CategoryLayout data={TarotCategoryData.tarot} categorySlug="tarot" />;
}