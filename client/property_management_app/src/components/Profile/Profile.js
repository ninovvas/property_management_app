import { useContext, useEffect, useState } from "react";
import validator from "validator";
import { AuthContext, useAuthContext } from "../../contexts/AutoContext";
import { useForm } from "../../hooks/useForm";
import { Link, useParams } from "react-router-dom";
import { usePropertyContext } from "../../contexts/PropertyContext";

export const Profile = ({
    // profileService
}) => {
    const {profileService} = usePropertyContext()
    //const { userId } = useContext(AuthContext);
    const { userId } = useAuthContext();
    const { profileId } = useParams();
    const [profile, setProfile] = useState({});

    useEffect(() => {
        profileService.getProfileById()
       .then(result => {
            setProfile(result);
        });
    }, []);

    //console.log(profile);
    return(
        <>
         <div className="pcoded-main-container">
        <div className="pcoded-wrapper">
            <div className="pcoded-content">
                <div className="pcoded-inner-content">
                <div className="page-header">
                            <div className="page-block">
                                <div className="row align-items-center">
                                    <div className="col-md-12">
                                        <div className="page-header-title">
                                            <h5 className="m-b-10">Profile</h5>
                                        </div>
                                        <ul className="breadcrumb">
                                            <li className="breadcrumb-item"><Link to={"/dashboard"}><i className="feather icon-home"></i></Link></li>
                                            <li className="breadcrumb-item"><Link to={"#"}>My Profile</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="main-body">
                        <div className="page-wrapper">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="card">
                                        <div className="card-body">
                                            <h5>Detail information about my account</h5>
                                            <div className="row">
                                                <div className="col-md-6">

                                                    <table className="table">
                                                        <tbody>
                                                            <tr>
                                                                <th>Username</th>
                                                                <td>{profile.username}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>First Name</th>
                                                                <td>{profile.first_name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Last Name</th>
                                                                <td>{profile.last_name}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Email</th>
                                                                <td>{profile.email}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>Address</th>
                                                                <td>{profile.address}</td>
                                                            </tr>
                                                            <tr>
                                                                <th>My Properties</th>
                                                                <td>{profile.properties && profile.properties .length > 0 ? 
                                                                (profile.properties.map(p => <li key={p._id}><Link to={`/property/details/${p._id}`}>{p.street} {p.streetNumber}</Link></li>)) : ("No Property")
                                                                
                                                                }</td>
                                                            </tr>
                                                            <tr>
                                                                <th>My Tenancies</th>
                                                                <td>{profile.tenancies && profile.tenancies .length > 0 ? 
                                                                (profile.tenancies.map(t => <li key={t._id}><Link to={`/tenancy/details/${t._id}`}>{t.street} {t.contractNumber}</Link></li>)) : ("No Tenancy")
                                                                
                                                                }</td>
                                                                
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                    <Link to={`/profile/edit/${userId}`}><button type="button" className="btn btn-warning" title="Edit" data-toggle="tooltip">Edit</button></Link>
                                                </div>
                                             
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    );
}