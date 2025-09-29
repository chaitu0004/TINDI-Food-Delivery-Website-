Reference code
 {itemcards?.map((item, index) => {
              const info = item?.card?.info;

                return (
                        <li key={info.id + "-" + index}>
                            {/* LEFT SIDE (dish details) */}
                            <div className="menu-text">
                            <h4>{info.name}</h4>
                            <div className="menu-price">
                                ₹{(info.price || info.defaultPrice) / 100}
                            </div>

                            {info.ratings?.aggregatedRating?.rating && (
                                <div className="menu-rating">
                                ⭐ {info.ratings.aggregatedRating.rating}{" "}
                                ({info.ratings.aggregatedRating.ratingCountV2})
                                </div>
                            )}

                            <p>{info.description}</p>
                            </div>

                            {/* RIGHT SIDE (image + ADD button) */}
                            <div className="menu-right">
                            {info.imageId && (
                                <img src={menu_img + info.imageId} alt={info.name} />
                            )}
                            <button className="add-btn">ADD</button>
                            </div>
                        </li>
                        );
                    })}