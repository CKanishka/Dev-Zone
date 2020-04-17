import React from 'react';
import dynamic from 'next/dynamic';
import {connect} from 'react-redux';
import {addItem} from "../redux/actions/itemActions";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
const Editor = dynamic(
    () => import('react-draft-wysiwyg').then(mod => mod.Editor),
    { ssr: false }
)
class InputModal extends React.Component{
    state={
        title:"",
        content:"",
        editorState: EditorState.createEmpty()
    };
    onChange = (e) => {
        this.setState({
            [e.target.name]:e.target.value
        });
    };

    
    onSubmit = (e) => {
        e.preventDefault();
        const newItem = {
            name:this.props.item.name,
            title:this.state.title,
            content:`${draftToHtml(convertToRaw(this.state.editorState.getCurrentContent()))}`
        };
        this.props.addItem(newItem)
         
    };
    
    onEditorStateChange = (editorState) => {
        this.setState({
          editorState
        });
      };
    
     
    render(){
        return(
            <div style={{textAlign:"left",marginBottom:"3em",position:"relative",zIndex:"3"}}>
                <div className="modal-main" style={{display:"block",padding:"1em"}}>
                    {/* <h3 id="title" className="mb-3">Start filling here</h3> */}
                    <form onSubmit={this.onSubmit}>
                        <div className="blog-form">
                            <div className="row">
                                
                                <div className="col-lg-6">
                                    <label>User Name</label>
                                    <input type="text" name="name" className="form-control text " value={this.props.item.name} placeholder="Enter your name" onChange={this.onChange} required/>
                                </div>
                                <div className="col-lg-6">
                                    <label>Title</label>
                                    <input type="text" name="title" className="form-control text" placeholder="Enter the title" onChange={this.onChange} required/>
                                </div>
                                <div className="col-sm-12">
                                    <label>Content</label>
                                    <Editor
                                        editorState={this.state.editorState}
                                        editorClassName="demo-editor"
                                        onEditorStateChange={this.onEditorStateChange}
                                        />
                                </div>
                                <div className="col-sm-12">
                                    <input type="submit" className="btn btn-primary mb-4 mb-lg-0" value="Submit"/>
                                </div>
                                
                            </div>
                        </div>
                    </form>
                </div>
            </div>     
        );
    }
}
export default connect(
    state => state,
    {addItem}
)(InputModal);
