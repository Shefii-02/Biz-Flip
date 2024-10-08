import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import InputLabel from '@/Components/InputLabel';
import TextInput from '@/Components/TextInput';
import InputError from '@/Components/InputError';
import { v4 as uuidv4 } from 'uuid';

const SortableComponent = ({ items, onDragEnd, onAddItem, onAddChildItem, onDeleteItem, onChangeItem, landingPage, formErrors }) => {
  const [errors, setErrors] = useState({});

  const findItemById = (items, id) => {
    for (let item of items) {
      if (item.id === id) {
        return item;
      }
      if (item.children) {
        const found = findItemById(item.children, id);
        if (found) {
          return found;
        }
      }
    }
    return null;
  };

  const validateItem = (item) => {
    const newErrors = {};
    if (!item.linkText ) {
      newErrors.linkText = 'Link text is required';
    }
    if (!item.linkType || item.linkType == 'page_link') {
      newErrors.linkType = 'Link type is required';
    }
    return newErrors;
  };

  const handleAddChildItem = (parentId) => {
    const parentItem = findItemById(items, parentId);
    if (!parentItem) {
      console.error('Parent item not found:', parentId);
      return;
    }

    const validationErrors = validateItem(parentItem);
    if (Object.keys(validationErrors).length > 0) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [parentId]: validationErrors,
      }));
      return;
    }

    onAddChildItem(parentId);
    setErrors((prevErrors) => ({
      ...prevErrors,
      [parentId]: {},
    }));
  };

  const renderTree = (items) => {
    return items.map((item, index) => (
      <Draggable key={item.id} draggableId={item.id} index={index}>
         {/* ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps} */}
        {(provided) => (
          <li
            className="sortable-item"
           
          >
            <div className='add-child-btn'>
              <span className="bi bi-plus" title='add a child item' onClick={() => handleAddChildItem(item.id)}></span>
            </div>
            <div className="col-lg-12">
              <div className="row">
                <div className="col-md-4">
                  <div className="form-group">
                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Name</InputLabel>
                    <TextInput
                      className="form-control" required
                      type="text"
                      value={item.linkText}
                      onChange={(e) => {
                        onChangeItem(item.id, { ...item, linkText: e.target.value });
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          [item.id]: {
                            ...prevErrors[item.id],
                            linkText: '',
                          },
                        }));
                      }}
                    />
                    
                   
                    {errors[item.id] && errors[item.id].linkText && (
                      <InputError message={errors[item.id].linkText} className="mt-2 col-12" />
                    )}
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="form-group">
                    <InputLabel className="fw-700 fs-16 form-label form-group__label">Link Type</InputLabel>
                    <select
                      className="form-control py-10"
                      value={item.linkType} required
                      onChange={(e) => {
                        onChangeItem(item.id, { ...item, linkType: e.target.value, customLink: e.target.value === 'page_link' ? '' : item.customLink });
                        setErrors((prevErrors) => ({
                          ...prevErrors,
                          [item.id]: {
                            ...prevErrors[item.id],
                            linkType: '',
                          },
                        }));
                      }}
                    >
                      <option value=''></option>
                      <optgroup label="Landing Pages">
                        {landingPage.map((page, i) => (
                          <option key={i} value={page.link}>{page.label}</option>
                        ))}
                      </optgroup>
                      <option className='fw-bold' value="custom_link">Custom Link</option>
                    </select>
                    
                    {errors[item.id] && errors[item.id].linkType && (
                      <InputError message={errors[item.id].linkType} className="mt-2 col-12" />
                    )}
                  
                  </div>
                </div>
                {item.linkType === 'custom_link' && (
                  <div className="col-md-4">
                    <div className="form-group">
                      <InputLabel className="fw-700 fs-16 form-label form-group__label">Custom link</InputLabel>
                      <TextInput
                        className="form-control"
                        type="text"
                        value={item.customLink}
                        onChange={(e) =>
                          onChangeItem(item.id, {
                            ...item,
                            customLink: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                )}
                <div className="remove-child-btn">
                  <span title="Delete this item"
                    className="bi bi-x my-10"
                    onClick={() => onDeleteItem(item.id)}
                  >
                  </span>
                </div>
              </div>
              {item.children && item.children.length > 0 && (
                <ul className="sub-tree">
                  {renderTree(item.children)}
                </ul>
              )}
            </div>
          </li>
        )}
      </Draggable>
    ));
  };

  return (
    <div className="sortable-container">
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="droppable">
        {/* ref={provided.innerRef}
        {...provided.droppableProps} */}
          {(provided) => (
            <ul
              className="sortable-list tree"
            
            >
              {renderTree(items)}
              {provided.placeholder}
            </ul>
          )}
        </Droppable>
      </DragDropContext>
      <span role='button' className="bi bi-plus-circle"  onClick={onAddItem} style={{position: 'absolute',left: '60px'}}>Add Item</span>
     
    </div>
  );
};

export default SortableComponent;
