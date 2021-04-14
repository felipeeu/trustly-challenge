import SearchInput from './components/input';
import CardProduct from './components/card';
const styles = {
	wrapper: {
		display: 'contents'
	},
	cardsWrapper: {
		justifyItems: 'center',
		display: 'grid',
		gridTemplateColumns: '1fr 1fr 1fr',
		rowGap: '66px'
	}
};
const Home = ({ products, setInputValue }) => (
	<div style={styles.wrapper}>
		<SearchInput setInputValue={setInputValue} />
		<div style={styles.cardsWrapper}>
			{products &&
				products.map((product, index) => {
					return (
						<CardProduct
							key={index}
							title={product.description}
							price={product.price}
							image={product.thumbnailURL}
						/>
					);
				})}
		</div>
	</div>
);

export default Home;
