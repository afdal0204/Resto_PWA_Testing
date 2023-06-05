/* eslint-disable eol-last */
/* eslint-disable object-curly-spacing */
/* eslint-disable space-before-function-paren */
/* eslint-disable max-len */
/* eslint-disable indent */
/* eslint-disable no-undef */
import FavoriteRestaurants from '../src/scripts/data/favorite-restaurant';
import * as TestFactories from './helpers/testFactories';

const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="likeButtonContainer"></div>';
};

describe('Unliking A Resto', () => {
    // eslint-disable-next-line space-before-function-paren
    beforeEach(async() => {
        addLikeButtonContainer();
        // eslint-disable-next-line object-curly-spacing
        await FavoriteRestaurants.putRestaurant({ id: 1 });
    });

    // eslint-disable-next-line space-before-function-paren
    afterEach(async() => {
        await FavoriteRestaurants.deleteRestaurant(1);
    });

    // test 6 (unlike)
    it('should display unlike widget when the Resto has been liked', async() => {
        // eslint-disable-next-line object-curly-spacing
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="unlike this resto"]'))
            .toBeTruthy();
    });

    // test 7
    it('should not display like widget when the Resto has been liked', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        expect(document.querySelector('[aria-label="like this resto"]'))
            .toBeFalsy();
    });

    // test 8
    it('should be able to remove liked Resto from the list', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
    });

    // test 9
    it('should not throw error if the unliked Resto is not in the list', async() => {
        await TestFactories.createLikeButtonPresenterWithResto({ id: 1 });

        await FavoriteRestaurants.deleteRestaurant(1);
        document.querySelector('[aria-label="unlike this resto"]').dispatchEvent(new Event('click'));

        expect(await FavoriteRestaurants.getAllRestaurants()).toEqual([]);
    });
});