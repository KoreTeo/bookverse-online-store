<script>

</script>

<template>
  <div className="admin_panel__main">
    <div className="admin_panel__left_container">
      <nav className="admin_panel__navigation">
        <button className="navigation__title choosed">Редактирование</button>
        <button className="navigation__title">Просмотр заказов</button>
      </nav>
      <div className="admin_panel__edit_container">
        <ul className="edit_container__title_list">
          <li className="edit_container__title_list_el">
            Название
          </li>
          <li className="edit_container__title_list_el">
            Автор
          </li>
          <li className="edit_container__title_list_el">
            Жанр
          </li>
          <li className="edit_container__title_list_el">
            Категория
          </li>
          <li className="edit_container__title_list_el">
            Цена, руб.
          </li>
          <li className="edit_container__title_list_el">
            Кол-во, штук
          </li>
        </ul>
        <ul className="edit_container__product_list">
          <li className="edit_container__product_list_el">
            Книга про Васю Пупкина
          </li>
          <li className="edit_container__product_list_el">
            Книга про Васю Пупкина
          </li>
          <li className="edit_container__product_list_el">
            Книга про Васю Пупкина
          </li>
          <li className="edit_container__product_list_el">
            Книга про Васю Пупкина
          </li>
          <li className="edit_container__product_list_el">
            Книга про Васю Пупкина
          </li>
          <li className="edit_container__product_list_el">
            Книга про Васю Пупкина
          </li>
        </ul>
        <Edit/>
        <Trash/>
      </div>
    </div>
    <form>
      <h3>Поиск товара(-ов)</h3>
      <label>Поиск</label>
      <input>
      <label>Цена</label>
      <div>
        <input>
        <input>
      </div>
      <label>Поиск в категории</label>
      <input placeholder="Все категории">
      <div>
        <BurgerBtn2/>
      </div>
      <button>Найти</button>
    </form>
  </div>
</template>

<style>

</style>