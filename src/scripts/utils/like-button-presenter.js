/* eslint-disable eol-last */
/* eslint-disable indent */
/* eslint-disable max-len */
/* eslint-disable object-curly-spacing */
import FavoriteRestaurants from '../data/favorite-restaurant';
import { createLikeRestoButtonTemplate, createUnlikeRestoButtonTemplate } from '../views/templates/template-creator';

const LikeButtonPresenter = {
    async init({ likeButtonContainer, restaurant }) {
        this._likeButtonContainer = likeButtonContainer;
        this._restaurant = restaurant;

        await this._renderButton();
    },

    async _renderButton() {
        const { id } = this._restaurant;

        if (await this._isRestaurantExist(id)) {
            this._renderLiked();
        } else {
            this._renderLike();
        }
    },

    async _isRestaurantExist(id) {
        const restaurant = await FavoriteRestaurants.getRestaurant(id);
        return !!restaurant;
    },

    _renderLike() {
        this._likeButtonContainer.innerHTML = createLikeRestoButtonTemplate();

        const likeButton = document.querySelector('#likeButtonContainer');
        // eslint-disable-next-line space-before-function-paren
        likeButton.addEventListener('click', async() => {
            await FavoriteRestaurants.putRestaurant(this._restaurant);
            this._renderButton();
        });
    },

    _renderLiked() {
        this._likeButtonContainer.innerHTML = createUnlikeRestoButtonTemplate();

        const likeButton = document.querySelector('#likeButtonContainer');
        // eslint-disable-next-line space-before-function-paren
        likeButton.addEventListener('click', async() => {
            await FavoriteRestaurants.deleteRestaurant(this._restaurant.id);
            this._renderButton();
        });
    },
};

export default LikeButtonPresenter;