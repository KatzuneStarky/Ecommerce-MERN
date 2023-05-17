import React from "react";
import LayoutComp from "../../Components/Layout/layoutComp";
import UserMenu from "./UserMenu";
import { useAuth } from "../../Context/Auth";
import { AiFillInfoCircle } from "react-icons/ai";

const Profile = () => {
    const [auth] = useAuth();
    return (
        <LayoutComp style={"bg-admin"} title={"Profile - Omamori Shop"}>
            <UserMenu />
            <div className="profile-container">
                <div className="profile-card">
                    <div className="profile-header">
                        <div className="main-profile">
                            <div className="profile-image"></div>
                            <div className="profile-names">
                                <h1 className="username">{auth?.user?.name}</h1>
                                <small className="page-title">{auth?.user?.email}</small>
                            </div>
                        </div>
                    </div>

                    <div className="profile-body">
                        <div className="profile-actions">
                            <button className="follow">Follow</button>
                            <button className="message">Message</button>
                            <section className="bio">
                                <div className="bio-header">
                                    <AiFillInfoCircle />
                                    Bio
                                </div>
                                <p className="bio-text"></p>
                            </section>
                        </div>

                        <div class="account-info">
                        <div class="data">
                            <div class="important-data">
                                <section class="data-item">
                                    <h3 class="value">104</h3>
                                    <small class="title">Post</small>
                                </section>
                                <section class="data-item">
                                    <h3 class="value">21K</h3>
                                    <small class="title">Follower</small>
                                </section>
                                <section class="data-item">
                                    <h3 class="value">51</h3>
                                    <small class="title">Following</small>
                                </section>
                            </div>
                            <div class="other-data">
                                <section class="data-item">
                                    <h3 class="value">41K</h3>
                                    <small class="title">Likes</small>
                                </section>
                                <section class="data-item">
                                    <h3 class="value">12K</h3>
                                    <small class="title">Comments</small>
                                </section>
                                <section class="data-item">
                                    <h3 class="value">2K</h3>
                                    <small class="title">Saved</small>
                                </section>
                            </div>
                        </div>

                        <div class="social-media">
                            <span>Follow me in:</span>
                            <a href="" class="media-link">
                                <i class="fab fa-facebook-square"></i>
                            </a>
                            <a href="https://twitter.com/MammadSahragard" class="media-link">
                                <i class="fab fa-twitter-square"></i>
                            </a>
                            <a
                                href="https://www.linkedin.com/in/mohammadsahragard/"
                                class="media-link"
                            >
                                <i class="fab fa-linkedin"></i>
                            </a>
                            <a
                                href="https://www.instagram.com/mammad.sahragard/"
                                class="media-link"
                            >
                                <i class="fab fa-instagram-square"></i>
                            </a>
                            <a href="https://github.com/MohammadSahragard" class="media-link">
                                <i class="fab fa-github-square"></i>
                            </a>
                        </div>

                        <div class="last-post">
                            <div class="post-cover">
                                <span class="last-badge">Last Post</span>
                            </div>
                            <h3 class="post-title">3D layer</h3>
                            <button class="post-CTA">View</button>
                        </div>
                    </div>
                    </div>                    
                </div>
            </div>
        </LayoutComp>
    );
};

export default Profile;
