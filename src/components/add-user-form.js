import React, {Component} from 'react';

class AddUserForm extends Component {
    constructor(props) {
      super(props);
      this.state = {
          email:'',
          userName:'',
          name:''
      };
    }
    componentDidUpdate(prevProps) {
        const {email, userName, name, userToUpdate}=this.props;
        if (prevProps.userToUpdate !== userToUpdate) {
            this.setState({
                email,
                userName,
                name
            });
        }
      }
    resetState=(email)=>{
        this.setState({
            email:'',
            userName:'',
            name:''
        })
    }

    submit=(name, userName, email)=>{
        if(this.props.userToUpdate){
            this.props.updateUser(name, userName, email); 
        } else{
            this.props.addUser(name, userName, email);
        }

    }

    render() {
      let {name, userName, email} = this.state;
          return (
            <div className="column">
                <div className="field">
                <label className="label">Name</label>
                <div className="control">
                    <input className="input" 
                        type="text" 
                        placeholder="Text input"
                        onChange={(e)=>this.setState({name: e.target.value})}
                        value={name}
                    />
                </div>
            </div>
            
            <div className="field">
                <label className="label">Username</label>
                <div className="control">
                    <input className="input" 
                        type="text" 
                        placeholder="Text input" 
                        value={userName}
                        onChange={(e)=>this.setState({userName: e.target.value})}
                    />
                </div>
            </div>
            
            <div className="field">
                <label className="label">Email</label>
                <div className="control">
                    <input className="input" 
                        type="email" 
                        placeholder="Email input" 
                        value={email}
                        onChange={(e)=>this.setState({email: e.target.value})}
                    />
               
                </div>
            </div>
            <div className="field is-grouped">
                <div className="control">
                <button 
                    className="button is-link"
                    onClick={()=>this.submit(name, userName, email)}
                >
                    {'Submit'}
                </button>
                </div>
                <div className="control">
                <button 
                    className='button is-link is-light'
                    onClick={this.props.closeModal}
                >
                    {'Cancel'}
                </button>
                </div>
            </div>
          </div>
          );
      }
}

AddUserForm.defaultProps = {
    email:'',
    userName:'',
    name:''
}

export default AddUserForm;