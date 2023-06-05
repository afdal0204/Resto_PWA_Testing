/* eslint-disable eol-last */
/* eslint-disable space-before-function-paren */
/* eslint-disable object-curly-spacing */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-undef */
import FavoriteRestaurants from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

describe('Liking A Resto', () => {
    const addLikeButtonContainer = () => {
        document.body.innerHTML = '<div id="likeButtonContainer"></div>';
    };

    beforeEach(() => {
        addLikeButtonContainer();
    });

    // test 1
    // eslint-disable-next-line space-before-function-paren
    it('should show the like button when the resto has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="like this resto"]'))
            .toBeTruthy();
    });

    // test 2
    it('should not show the unlike button when the restaurant has not been liked before', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        expect(document.querySelector('[aria-label="unlike this restaurant"]'))
            .toBeFalsy();
    });

    // test 3
    it('should be able to like the restaurant', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));

        const restaurant = await FavoriteRestaurants.getRestaurant(1);
        expect(restaurant).toEqual({ id: 1 });

        FavoriteRestaurants.deleteRestaurant(1);
    });

    // test 4 (skenario negatif)
    it('should not add a restaurant again when its already liked', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });
        await FavoriteRestaurants.putRestaurant({ id: 1 });
        document.querySelector('#likeButtonContainer').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([{ id: 1 }]);
        FavoriteRestaurants.deleteRestaurant(1);
    });

    // test 5 (kebutuhan like & liked)
    // xit
    it('should not add a restaurant when it has no id', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({});

        document.querySelector('#likeButton').dispatchEvent(new Event('click'));
        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
    });
});