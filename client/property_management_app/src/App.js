import { Routes, Route} from 'react-router-dom';
import { AuthProvider} from './contexts/AutoContext';
import './App.css';
import { Login } from './components/Login/Login';
import { Home } from './components/Home/Home';
import { Register } from './components/Register/Register';
import { Dashboard } from './components/Dashboard/Dashboard';
import { Logout } from './components/Logout/Logout';
import { CreateObject } from './components/CreateObject/CreateObject';
import { Property } from './components/Property/Property';
import { RouteGuard } from './components/common/RouteGuard';
import { PropertyDetails } from './components/PropertyDetails/PropertyDetails';
import { EditProperty } from './components/EditProperty/EditProperty';
import { CreateTenant } from './components/CreateTenant/CreateTenant';

import { TenantList } from './components/Tenant/TenantList';
import { TenantDetails } from './components/TenantDetails/TenantDetails';
import { EditTenant } from './components/EditTenant/EditTenant';
import { CreateTenancy } from './components/CreateTenancy/CreateTenancy';
import { TenancyList } from './components/Tenancy/TenancyList';
import { TenancyDetails } from './components/TenancyDetails/TenancyDetails';
import { EditTenancy } from './components/EditTenancy/EditTenancy';
import { Profile } from './components/Profile/Profile';
import { EditProfile } from './components/EditProfile/EditProfile';
import { ErrorMessages } from './components/ErrorMessages/ErrorMessages';
import { PropertyProvider, usePropertyContext } from './contexts/PropertyContext';
import { Suspense } from 'react';

function App() {

   
      return (
        <AuthProvider>
          <PropertyProvider>
          
            <Routes>
              <Route path='*' element={<ErrorMessages />} />
              <Route path='/' element={<Home />} />
              <Route path='/login' element={<Login />}></Route>
              <Route path='/register' element={<Register />}></Route>
              
              <Route element={<RouteGuard />}>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='/dashboard' element={<Dashboard />}></Route>
                <Route path='/logout' element={<Logout />}></Route>
                <Route path='/property/' element={<Property />}></Route>
                <Route path='/create_property/' element={<CreateObject />}></Route>
                <Route path='/create_tenant/' element={<CreateTenant />}></Route>
                <Route path='/create_tenancy/' element={<CreateTenancy />}></Route>
                <Route path='/tenancy/' element={<TenancyList />}></Route>
                <Route path='/tenants/' element={<TenantList  />}></Route>
                <Route path='/profile' element={<Profile />}></Route>
                <Route path='/profile/edit/:userId' element={<EditProfile />}></Route>
                <Route path='/property/details/:propertyId' element={<PropertyDetails />} />
                <Route path='/property/edit/:propertyId' element={<EditProperty />} />
                <Route path='/tenant/details/:tenantId' element={<TenantDetails />} />
                <Route path='/tenant/edit/:tenantId' element={<EditTenant />} />
                <Route path='/tenancy/details/:tenancyId' element={<TenancyDetails />} />
                <Route path='/tenancy/edit/:tenancyId' element={<EditTenancy />} />
              </Route>
              
            </Routes>
           
          </PropertyProvider>
        </AuthProvider>

      );

     
}

export default App;
