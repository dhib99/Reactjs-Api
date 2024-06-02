import React, { useEffect, useState } from 'react';

const Index = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        let allUsers = [];
        let page = 1;
        while (allUsers.length < 1000) {
            const response = await fetch(`https://api.github.com/users?per_page=100&page=${page}`);
            const usersData = await response.json();
            if (usersData.length === 0) {
                break; // No more users to fetch
            }
            allUsers = allUsers.concat(usersData);
            page++;
        }
        setUsers(allUsers);
    };

    useEffect(() => {
        getUsers();
    }, []);

    return (
        <div className="container">
            {users.map((user) => (
                <div className="card_item" key={user.id}>
                    <div className="card_inner">
                        <img src={user.avatar_url} alt="" />
                        <div className="userName">{user.login}</div>
                        <div className="userUrl">{user.url}</div>
                        <div className="detail-box">
                            <div className="gitDetail"><span>Articles</span>23</div>
                            <div className="gitDetail"><span>Following</span>45</div>
                            <div className="gitDetail"><span>Followers</span>11</div>
                        </div>
                        <button className="seeMore">See More</button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Index;
