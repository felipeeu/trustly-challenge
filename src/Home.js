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
const Home = ({ products, setInputValue, filterById }) => (
	<div style={styles.wrapper}>
		<SearchInput setInputValue={setInputValue} />
		<div style={styles.cardsWrapper}>
			{products.length === 0 ? (
				<div>No Sneakers Found</div>
			) : (
				products &&
				products.map((product, index) => {
					return (
						<CardProduct
							key={index}
							title={product.description}
							price={product.price}
							image={product.thumbnailURL}
							id={product.id}
							filterById={filterById}
						/>
					);
				})
			)}
		</div>
	</div>
);

export default Home;
