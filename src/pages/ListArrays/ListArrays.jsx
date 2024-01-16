import { List } from "../../Components/List/List"
import { ContentWrapper } from "../../components/ContentWrapper/ContentWrapper"

export const ListArrays = () => {

	const arrMovies = [
		'Lord of the rings',
		'Alien - Covenant',
		'Shawshank Redemption',
		'Vacation'
	]

	const arrDishes = [
		'Frikadeller',
		'Spaghetti med kødsovs',
		'Beef Wellington',
		'Grøntsagssuppe'
	]

  return (
	<ContentWrapper title="Lister med arrays">
		<h2>Mine favoritfilm</h2>
		<List data={arrMovies} />
		<h2>Mine livretter</h2>
		<List data={arrDishes} />
	</ContentWrapper>
  )
}
