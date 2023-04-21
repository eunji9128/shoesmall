<Routes>
          <Route path='/' element={
            <>

              {/* main background */}
              <div className='main-bg'></div>

              {/* product display */}
              <Container>
                <List products={products} />
              </Container>

              {
                more_btn == true
                  ? <Button variant='secondary' onClick={MoreProduct}>more products</Button>
                  : null
              }

            </>
          } />
          <Route path='/detail/:id' element={<Detail products={products} />} />
          <Route path='/about' element={<About />} />
          <Route path='/event' element={<Event />}>
            <Route path='one' element={<div>첫 주문 시 50% 할인</div>} />
            <Route path='two' element={<div>생일 기념 쿠폰 받기</div>} />
          </Route>
        </Routes>